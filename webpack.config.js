const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
 
module.exports = {
    entry: './src/index.js',
    output: { 
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public'
    },
    //devServer: {
    //    contentBase: path.resolve(__dirname, 'public'),
    //    inline: true
    //},
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { 
                            presets: ['es2015', 'react'] 
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcss: 
                                    autoprefixer({
                                        browsers: ['last 2 version', 'Explorer >= 10', 'Android >= 4']
                                    })
                            }        
                        }, 
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            context: './src/',
                            publicPath: '../public/'
                        }
                    }
                ]
            },
            {
                test: /\.ttf$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '/fonts/[name].[ext]',
                            publicPath: '../public'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        }),
        //new webpack.NamedModulesPlugin(),
        //new webpack.HotModuleReplacementPlugin()
    ]
};
