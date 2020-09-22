const webpack = require('webpack')

const { addWebpackPlugin } = require('./addWebpackPlugin')

function withIgnore(nextConfig) {
  return addWebpackPlugin(
    nextConfig,
    new webpack.IgnorePlugin({
      checkResource: (resource) => {
        return (
          resource.endsWith('awesomplete.css') ||
          resource.includes('core-js/library') ||
          resource.includes('babel-runtime')
        )
      },
    }),
  )
}

module.exports = { withIgnore }
