
const config = require('./webpack.config');
const merge = require('webpack-merge');
var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(config, {
    entry : './src/lib/index.js',
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
                      publicPath: (resourcePath, context) => {
                        // publicPath is the relative path of the resource to the context
                        // e.g. for ./css/admin/main.css the publicPath will be ../../
                        // while for ./css/main.css the publicPath will be ../
                        return path.relative(path.dirname(resourcePath), context) + '/';
                      },
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