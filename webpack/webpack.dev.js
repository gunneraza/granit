const { PATH } = require("./config");
const MERGE = require('webpack-merge')
const BASE  = require('./webpack.base')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = MERGE(BASE, {
    mode: 'development',

    node: {
        fs: 'empty'
    },

    devServer: {
        host: '0.0.0.0',
        port: 8081,
        useLocalIp: true,
        open: true,

        overlay: true,
        compress: false, 
        historyApiFallback: true,
        contentBase: PATH.src,
        publicPath: '/',
        stats: 'errors-only'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',

                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    },
                ]
            },

            {
                test: /\.scss$/,
                use: [
                    'style-loader',
        
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    },

                    {
                        loader: "sass-loader",
                        options: { sourceMap: true }
                    },
                ]
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: `${PATH.src}/html/index.hbs`,
            templateParameters: require(`${PATH.src}/html/data/data.js`),
        })
    ]
})