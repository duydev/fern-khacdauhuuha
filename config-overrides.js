const rewireEslint = require('react-app-rewire-eslint')
const { injectBabelPlugin } = require('react-app-rewired')

module.exports = function override(config, env) {
  config = rewireEslint(config, env)
  injectBabelPlugin(
    [
      'module-resolver',
      {
        root: ['./src']
      }
    ],
    config
  )
  injectBabelPlugin('transform-export-extensions', config)
  return config
}
