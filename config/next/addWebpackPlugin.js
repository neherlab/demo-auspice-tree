const { addWebpackConfig } = require('./addWebpackConfig')

function addWebpackPlugin(nextConfig, plugin) {
  return addWebpackConfig(nextConfig, (nextConfig, webpackConfig, { isServer }) => {
    if (!isServer) {
      if (webpackConfig?.plugins) {
        webpackConfig.plugins.push(plugin)
      } else {
        return { plugins: [plugin] }
      }
    }
    return webpackConfig
  })
}

module.exports = { addWebpackPlugin }
