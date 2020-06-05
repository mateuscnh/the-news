module.exports = {
    entry: {
        "index": './src/js/index.js',
        "news": './src/js/news.js'
    },
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: '[name].js'
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}