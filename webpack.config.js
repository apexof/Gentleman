const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const p = {
    dist: path.resolve(__dirname, "dist"),
    src: path.resolve(__dirname, "src"),
};

module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: "bundle.js",
        path: p.dist,
        publicPath: "/",
    },
    devtool: "source-map",
    mode: "development",
    watch: true,
    watchOptions: { ignored: /node_modules/, },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[name]_[local]_[hash:base64:5]",
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.jsx?$/,
                include: p.src,
                loader: "babel-loader",
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ["*.*.*", ], }),
        new MiniCssExtractPlugin({ filename: "style.css", }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            minify: { removeScriptTypeAttributes: true, },
        }),
        new webpack.ProvidePlugin({
            React: "react",
            PropTypes: "prop-types",
        }),
    ],
    resolve: { extensions: [".js", ".json", ".jsx", "*", ], },
};
