const path = require('path');

const config = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        libraryTarget: 'umd'
    }
}

module.exports = config;