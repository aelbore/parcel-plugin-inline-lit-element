import * as path from 'path'
import * as ts from 'typescript'

import { inlineStyles, cssImportDeclation } from 'lit-element-transpiler'

const { Asset } = require('parcel-bundler')

function transpiler(tsFilePath: string, contents: string) {
  const { outputText, sourceMapText } = ts.transpileModule(contents, {
    compilerOptions: {
      module: ts.ModuleKind.ES2015,
      target: ts.ScriptTarget.ES2018,
      skipLibCheck: true,
      skipDefaultLibCheck: true,
      strictNullChecks: false,
      sourceMap: true,
      allowJs: true
    },
    transformers: {
      before: [
        inlineStyles(tsFilePath),
        cssImportDeclation()
      ]
    }
  })
  return {
    code: outputText,
    map: sourceMapText
  }
}

class InlineLitElement extends Asset {

  constructor(name, options) {
    super(name, options)
    this.type = 'js'
  }

  generate() {
    if (!this.id.includes('node_modules')) {
      const result = transpiler(path.resolve(this.id), this.contents)
      return result.code.substring(0, result.code.lastIndexOf('//# sourceMappingURL'))
    }
    return this.contents
  }

}

module.exports = InlineLitElement