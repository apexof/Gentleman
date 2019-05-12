const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const autoprefixer = require("autoprefixer")({ browsers: ["> 1%", "last 2 versions"], });

const NODE_ENV = process.env.NODE_ENV || "development";
const IS_DEV = NODE_ENV === "development";
const p = {
    dist: path.resolve(__dirname, "dist"),
    src: path.resolve(__dirname, "src"),
};
module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: "bundle.[chunkhash].js",
        path: p.dist,
        publicPath: "/",
    },
    devtool: IS_DEV ? "source-map" : false,
    mode: NODE_ENV,
    watch: IS_DEV,
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
        new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ["*.*", "!static", "!index.html", ], }),
        new MiniCssExtractPlugin({ filename: "style.[chunkhash].css", }),
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
