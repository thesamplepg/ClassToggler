const webpack = require('webpack');
const path = require('path');

const paths = {
    entry: path.resolve(__dirname, 'src', 'index'),
    output: path.resolve(__dirname, 'dest')
}

module.exports = {
    entry: paths.entry,
    output: {
        filename: 'classToggler.js',
        path: paths.output
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
}