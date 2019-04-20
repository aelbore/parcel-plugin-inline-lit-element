export default function(bundler) {
  bundler.addAssetType('ts', require.resolve('./ts-assets'));
  bundler.addAssetType('js', require.resolve('./js-assets'))
}