module.exports = {
    entry: ["@babel/polyfill", './src/js/index.js'],
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'index.js'
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
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}