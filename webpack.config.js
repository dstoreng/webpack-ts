const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: "./src/index.ts"
    },
    mode: "development",
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            }
        ],

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name]_bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        compress: false, // don't gzip
        port: 3000,
      }
};