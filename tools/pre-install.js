
const path = require('path')
const util = require('util')
const fs = require('fs')

const { symlinkDir } = require('aria-fs')

const writeFile = util.promisify(fs.writeFile)
const PKG = 'parcel-plugin-inline-lit-element'

const updatePkgFile = async () => {
  const pkg = require('../package.json')
  if (pkg.devDependencies && pkg.devDependencies[PKG]) {
    delete pkg.devDependencies[PKG]
    await writeFile('./package.json', JSON.stringify(pkg, null, 2))
  } 
}

updatePkgFile()