"use strict";

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: path.resolve(__dirname, "../src/index.tsx"),
    mode: "development",
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {}
                    },
                    {
                        loader: "sass-loader",
                        options: {}
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/,
                loader: 'file-loader?name=assets/images/[name].[hash].[ext]'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/fonts',
                    publicPath: 'assets/fonts/'
                }
            },
            {
                enforce: 'pre',
                test: /\.ts(x?)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    output: {
        path: path.resolve(__dirname, "../dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "../public/"),
        port: 3000,
        hotOnly: true,
        host: '0.0.0.0',
        historyApiFallback: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].css"
        }),
        new WebpackNotifierPlugin({
            title: 'books-admin',
            skipFirstNotification: true
        }),
    ],
    optimization: {
        // Extract shared runtime code.
        runtimeChunk: 'single',
        namedModules: true,
        noEmitOnErrors: true
    }
};
