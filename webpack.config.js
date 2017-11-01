const path = require('path');

const config = {
    entry: './src/test.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "web-components-demo.js",
        libraryTarget: 'umd'
    }
}

module.exports = config;