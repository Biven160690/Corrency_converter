
const { alias } = require('react-app-rewire-alias')
module.exports = function override (config) {
  alias({
    '@theme': 'src/theme',
  })(config)

  return config
}
