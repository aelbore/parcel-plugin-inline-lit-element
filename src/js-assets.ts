import { transpiler } from 'lit-element-transpiler'
const JSAsset = require('parcel-bundler/src/assets/JSAsset')

class JSAssetInline extends JSAsset {

  async transform() {
    if (!this.name.includes('node_modules')) {
      const result = transpiler(this.name, this.contents)
      this.contents = result.code.substring(0, result.code.lastIndexOf('//# sourceMappingURL'))
      this.ast = await this.parse(this.contents)
    }
    await super.transform()
  }

}

module.exports = JSAssetInline