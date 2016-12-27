var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + "/app",
    entry: "./index",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html', // Load a custom template
        inject: 'body' // Inject all scripts into the body
      })
    ]
}
