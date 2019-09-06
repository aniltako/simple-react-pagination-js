const webpack = require('webpack');
const merge = require('webpack-merge');
var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackIgnoreFiles = require('./plugins/WebpackIgnoreFiles');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = merge({
    entry : './src/demo/index.js',
    output : {
        path : path.resolve(__dirname , 'build-demo'),
        filename: 'index.js'
    },
    devtool: false,
    mode:'production',
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {
                test: /\.css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: '../',
                      include: [path.resolve(__dirname, 'src/styles/css/custom/style.min.css')]
                    },
                  },
                  'css-loader',
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/',
                      publicPath: './fonts',
                    }
                  }
                ]
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin ({
        template : 'public/index.html'
      }),
      new webpack.SourceMapDevToolPlugin({}),
      new WebpackIgnoreFiles({files: ['style.js']}),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: 'style.css',
        chunkFilename: '[id].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      })
    ]
})