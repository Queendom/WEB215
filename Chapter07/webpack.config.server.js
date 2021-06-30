const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "server",
    entry: [ path.join(CURRENT_WORKING_DIR , './server/server.js') ],
    target: "node",
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist/'),
        filename: "server.generated.js",
        publicPath: '/dist/',
        libraryTarget: "commonjs2"
    },
    externals: [nodeExternals(), {
            formidable: 'commonjs formidable',
        }],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
            }
        ]
    },
	plugins: [ new webpack.DefinePlugin({ "global.GENTLY": false }) ]
}

module.exports = config
