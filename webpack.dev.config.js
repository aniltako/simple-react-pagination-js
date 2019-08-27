
const webpack = require('webpack');
const config = require('./webpack.config.js');
const merge = require('webpack-merge');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = merge(config, {
    entry : './src/index.js',
    mode:'development',
    devtool: false,
    module : {
        rules : [
            {test : /\.css$/, use: ['style-loader','css-loader']},
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/',
                    }
                  }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: 'react-hot-loader/webpack',
                include: /node_modules/
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'public/index.html'
        }),
        new webpack.SourceMapDevToolPlugin({})
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true,
        open: true,
        inline: true,
        watchContentBase: true
    }
})