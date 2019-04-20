import * as ts from 'typescript'

import { inlineStyles, cssImportDeclation } from 'lit-element-transpiler'

export function transpiler(tsFilePath: string, contents: string) {
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