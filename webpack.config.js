const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtReactWebpackPlugin = require("@sencha/ext-react-webpack-plugin");

const DEV_SERVER_PORT = 8282;
const SRC_DIR = path.resolve(__dirname, "src");
const OUT_DIR = path.resolve(__dirname, "dist");

module.exports = function () {
    return {
        entry: SRC_DIR + "/main.js",
        mode: "development",
        devtool: "source-map",
        output: {
            path: OUT_DIR,
            filename: "bundle.js"
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }]
        },
        plugins: [
            new CleanWebpackPlugin([OUT_DIR]),
            new HtmlWebpackPlugin({
                template: SRC_DIR + "/index.html",
                hash: true
            }),
            new ExtReactWebpackPlugin({
                port: DEV_SERVER_PORT,
                production: false
            }),
        ],
        devServer: {
            contentBase: OUT_DIR,
            host: "0.0.0.0",
            port: DEV_SERVER_PORT,
            disableHostCheck: true,
        }
    };
};
