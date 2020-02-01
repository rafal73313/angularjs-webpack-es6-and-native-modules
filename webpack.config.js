var path = require('path');
var webpack = require('webpack');
var UglifyJs = require('uglifyjs-webpack-plugin');
var glob = require('glob');

var build_es6 = {
    mode: 'production',
    entry: {
        main: path.join(__dirname, './src/es6/index.js'),
        submodules: glob.sync('*.js', {
            cwd: path.join(__dirname, './src/es6_submodules'),
            root: '/',
            matchBase: true,
            realpath: true
        }),
        vendor: [
            'angular'
        ]
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash:8].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_module/,
                options: {
                    presets: ['@babel/env'],
                    plugins: [['angularjs-annotate', { explicitOnly: true }]]
                }
            }
        ]
    },
    plugins: [
        new UglifyJs()
    ]
}

var build_rest = {
    mode: 'development',
    entry: glob.sync('*.js', {
        cwd: path.join(__dirname, './src/rest'),
        root: '/',
        realpath: true,
        matchBase: true
    }),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'rest.bundle.js'
    },
    plugins: [
        new UglifyJs()
    ]
}

module.exports = {
    build_es6, build_rest
}