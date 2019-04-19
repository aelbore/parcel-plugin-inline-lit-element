import * as path from 'path'
import * as fs from 'fs'
import * as util from 'util'

import { rollup } from 'rollup'
import { clean } from 'aria-fs'

const writeFile = util.promisify(fs.writeFile)
const copyFile = util.promisify(fs.copyFile)

const typescript2 = require('rollup-plugin-typescript2');
const resolve = require('rollup-plugin-node-resolve')

const DEST_PATH = 'parcel-plugin-inline-lit-element'

function rollupBuild({ inputOptions, outputOptions }) {
  return rollup(inputOptions).then(bundle => bundle.write(outputOptions));
}

async function copyReadmeFile() {
  return copyFile(path.resolve('README.md'), path.resolve(`${DEST_PATH}/README.md`))
}

async function copyPackageFile() {
  const FILE_NAME = 'package.json';
  const pkg = require(`../${FILE_NAME}`);
  delete pkg.scripts;
  delete pkg.devDependencies;
  return writeFile(`${DEST_PATH}/${FILE_NAME}`, JSON.stringify(pkg, null, 2))
}

const generateRollupConfig = (input, output) => {
  return {
    inputOptions: {
      treeshake: true,
      input: input,
      external: [
        'path', 
        'typescript', 
        'parcel-bundler', 
        'lit-element-transpiler'
      ],
      plugins: [
        typescript2({
          tsconfigDefaults: { 
            compilerOptions: { 
              target: 'es2015', 
              module: 'esNext', 
              moduleResolution: 'node',
              declaration: true,
              lib: [ "dom", "es2015", "es2017" ]
            },
            exclude: [
              "demo/**/*"
            ],
            include: [ input ]
          },
          check: false,
          cacheRoot: path.join(path.resolve(), 'node_modules/.tmp/.rts2_cache'), 
          useTsconfigDeclarationDir: true
        }),    
        resolve()
      ],
      onwarn (warning) {
        if (warning.code === 'THIS_IS_UNDEFINED') { return; }
        console.log("Rollup warning: ", warning.message);
      }
    },
    outputOptions: {
      sourcemap: false,
      file: output,
      format: 'cjs'
    }
  }
}

const files = [
  { input: 'src/index.ts', output: `${DEST_PATH}/index.js` },
  { input: 'src/inline-plugin.ts', output: `${DEST_PATH}/inline-plugin.js` }
]

clean(DEST_PATH)
  .then(() => {
    return Promise.all(files.map(file => {
      const rollupConfig = generateRollupConfig(file.input, file.output)
      return rollupBuild(rollupConfig)
    }))
  })
  .then(() => copyPackageFile())
  .then(() => copyReadmeFile())
  