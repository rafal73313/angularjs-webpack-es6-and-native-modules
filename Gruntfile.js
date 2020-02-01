var webpackConfig = require('./webpack.config');

module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            build: {
                files: {
                    './dist/index.html': './index.html'
                }
            }
        },

        webpack: webpackConfig,

        injector: {
            options: {
                relative: true
            },
            production: {
                files: {
                    './dist/index.html': ['./dist/final.bundle.js']
                }
            }
        },

        concat: {
            production: {
                files: {
                    './dist/final.bundle.js': [
                        './dist/vendor.*.js',
                        './dist/templates.cache.js',
                        './dist/rest.bundle.js',
                        './dist/main.*.js'
                    ]
                }
            }
        },

        clean: {
            files: './dist'
        },

        html2js: {
            options: {
                base: './',
                module: 'wa.templates',
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                  }
            },
            production: {
                src: './src/**/*.html',
                dest: './dist/templates.cache.js'
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-injector');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-html2js')

    grunt.registerTask('default', [
        'clean',
        'html2js',
        'copy',
        'webpack:build_es6',
        'webpack:build_rest',
        'concat:production',
        'injector:production'
    ])
}