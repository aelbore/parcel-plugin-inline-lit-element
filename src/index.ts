export default function(bundler) {
  bundler.addAssetType('ts', require.resolve('./inline-plugin'));
}