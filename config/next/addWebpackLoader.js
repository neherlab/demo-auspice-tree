const { addWebpackConfig } = require('./addWebpackConfig')

function addWebpackLoader(nextConfig, getLoader) {
  return addWebpackConfig(nextConfig, (nextConfig, webpackConfig, options) => {
    const loader = getLoader(webpackConfig, options)
    webpackConfig?.module?.rules?.push(loader)
    return webpackConfig
  })
}

module.exports = { addWebpackLoader }
