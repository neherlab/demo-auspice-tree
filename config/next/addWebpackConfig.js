function addWebpackConfig(nextConfig, customWebpackConfig) {
  const webpack = (webpackConfig, options) => {
    const newConfig = customWebpackConfig(nextConfig, webpackConfig, options)

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(newConfig, options)
    }

    return newConfig
  }

  return { ...nextConfig, webpack }
}

module.exports = { addWebpackConfig }
