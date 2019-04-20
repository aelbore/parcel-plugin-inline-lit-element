import { transpiler } from './transpiler'
const { Asset } = require('parcel-bundler')

class InlineLitElement extends Asset {

  constructor(name, options) {
    super(name, options)
    this.type = 'js'
  }

  generate() {
    if (!this.name.includes('node_modules')) {
      const result = transpiler(this.name, this.contents)
      return result.code.substring(0, result.code.lastIndexOf('//# sourceMappingURL'))
    }
    return this.contents
  }

}

module.exports = InlineLitElement