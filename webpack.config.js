var path = require('path');
var webpack = require('webpack');
var UglifyJs = require('uglifyjs-webpack-plugin');
var glob = require('glob');

var build_es6 = {
    mode: 'production',
    entry: {
        main: path.join(__dirname, './src/es6/index.js'),
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
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_module/,
                options: {
                    presets: ['@babel/env'],
                    plugins: [['angularjs-annotate', { explicitOnly: true }]]
                }
            }
        ]
    }
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