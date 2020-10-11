const webpack = require("webpack")
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin") ; 

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Resolves the URLs inside scass files 
                    'resolve-url-loader' , 
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: "file-loader",
                options: {
                    outputPath: "assets/",
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader",
                options: {
                    outputPath: "assets/",
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "3rd party",
            template: path.join(__dirname, "src/index.html"),
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin() , 
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename : "[chunkhash].js"
    },
};

