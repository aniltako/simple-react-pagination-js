
const config = require('./webpack.config');
const merge = require('webpack-merge');
var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(config, {
    entry : {
      index: ['./src/lib/index.js', './src/styles/css/custom/style.min.css']
    },
    output : {
        libraryTarget: 'umd',
        library: 'simple-react-pagination-js',
    },
    devtool: false,
    mode:'production',
    module : {
        rules : [
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
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: 'style.css',
        chunkFilename: '[id].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      })
    ]
})