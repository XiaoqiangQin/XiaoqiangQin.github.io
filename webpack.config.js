module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    }

    ,devtool: "eval-source-map"

    ,module: {
        rules: [
            {
                test: /(\.jsx|\.js)/,
                use: {
                    loader: "babel-loader",
                    options: {
                    }
                },
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }, {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    }
};