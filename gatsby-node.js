const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@elements': path.resolve(__dirname, 'src/elements'),
        '@style': path.resolve(__dirname, 'src/style'),
      },
    },
  })
}
