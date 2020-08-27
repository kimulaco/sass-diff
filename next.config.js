const package = require('./package.json')

module.exports = {
  env: {
    SASS_VERSION_DART: package.dependencies['sass'].replace('^', ''),
    SASS_VERSION_NODE: package.dependencies['node-sass'].replace('^', ''),
  },
}
