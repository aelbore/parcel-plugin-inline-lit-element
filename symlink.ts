const path = require('path')
const util = require('util')
const fs = require('fs')

const { symlinkDir } = require('aria-fs')

const writeFile = util.promisify(fs.writeFile)
const PKG = 'parcel-plugin-inline-lit-element'

const updatePkgFile = async () => {
  const pkg = require('./package.json')
  if (pkg.devDependencies && pkg.devDependencies[PKG]) {
    await Promise.resolve()
  } else {
    pkg.devDependencies[PKG] = '0.0.0'
    await writeFile('./package.json', JSON.stringify(pkg, null, 2))
  }
}

Promise.all([
  symlinkDir(
    path.resolve(PKG),
    path.resolve(`node_modules/${PKG}`)
  ),
  updatePkgFile()
])