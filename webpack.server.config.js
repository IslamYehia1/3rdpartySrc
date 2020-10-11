const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: "inline-source-map",

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
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Resolves the URLs inside scass files 
                    'resolve-url-loader' , 
                    // Compiles Sass to CSS
                    "sass-loader"
                ],
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: "file-loader",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader",
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "3rd party",
            template: path.join(__dirname, "src/index.html"),
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "src"),
        historyApiFallback: true,
    },

    output: {
        publicPath: "/",
    },
    resolve: {},
};

