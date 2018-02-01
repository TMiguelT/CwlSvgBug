const path = require("path");

module.exports = {
    devtool: "source-map",

    entry: "./index.js",

    output: {
        path: path.resolve("."),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [require('babel-preset-env')]
                    }
                }
            },
            {
                enforce: "pre",
                test: /\.ts?$/,
                exclude: ["node_modules"],
                use: ["awesome-typescript-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ]
    },

    resolve: {
        extensions: [".ts", ".js", ".json", ".scss"]
    }
}
;
