const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@animations': path.resolve(__dirname, 'src/animations'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@elements': path.resolve(__dirname, 'src/elements'),
        '@style': path.resolve(__dirname, 'src/style'),
        '@util': path.resolve(__dirname, 'src/util'),
      },
    },
  })
}
