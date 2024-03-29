const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer")({ browsers: ["> 1%", "last 2 versions", ], });
const cssnano = require("cssnano");

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
    devtool: false,
    mode: "production",
    watch: false,
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
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: [autoprefixer, cssnano, ],
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
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
        }),
        new webpack.ProvidePlugin({
            React: "react",
            PropTypes: "prop-types",
        }),
    ],
    resolve: { extensions: [".js", ".json", ".jsx", "*", ], },
};
