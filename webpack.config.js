module.exports = {
    entry: "./app/app.js",
    output: {
        path: __dirname + "/app/bundle",
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.coffee', '.js']
    }
};