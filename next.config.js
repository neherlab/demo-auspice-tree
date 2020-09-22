const withPlugins = require('next-compose-plugins')
const getWithTranspileModules = require('next-transpile-modules')

const withIgnore = require('./config/next/withIgnore')

const transpilationListDev = [
  // prettier-ignore
  'auspice',
  'd3-scale',
]

// Process some of the node_modules, along with our source code
const withTranspileModules = getWithTranspileModules([
  // prettier-ignore
  'auspice',
  'd3-scale',
])

const config = withPlugins(
  // prettier-ignore
  [
    [withIgnore],
    [withTranspileModules],
  ],
  {},
)

module.exports = config
