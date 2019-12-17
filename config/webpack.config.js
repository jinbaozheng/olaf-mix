const path = require('path');
const OlafMixLoader = require('../packages/olaf-mix-loader/index');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    // mode: 'development',
    mode: 'production',
    entry: './input/index.js',
    output: {
        library: 'olaf_mix',
        libraryTarget: 'umd',
        filename: 'index._webpack.js',
        path: path.resolve(__dirname, '..', 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'olaf-mix-loader',
                ]
            }
        ]
    },
    resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, '..')]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                minify: (file, sourceMap) => {
                    const extractedComments = [];
                    console.log(file);
                    const { error, map, code, warnings } = require('uglify-js')
                        .minify(file, {
                            /* Your options for minification */
                        });
                    return { error, map, code, warnings, extractedComments };
                },
            }),
        ],
    }
};