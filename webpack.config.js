var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    context: __dirname + "/app", // This is an absolute path to your application’s source files.
    entry: "./index",  // The main file that bootstraps your Angular application. This generates multiple bundle files.
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html', // Load a custom template
            inject: 'body' // Inject all scripts into the body
        })

    ],
    module: {
        loaders: [
            {
                test:/\.js$/,
                loader: 'ng-annotate',
                exclude: [/node_modules/]
            },
            {
                test: /\.html$/,
                loader: 'raw',
                 exclude: [/node_modules/]
            }

        ]
    }
}