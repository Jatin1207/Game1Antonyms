const path = require('path');
const distPath = path.resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/game.js',
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
    ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'src/index.html'
        })
    ],
    output: {
        filename: 'main.js',
        path: distPath
    },
    devServer: {
        contentBase: distPath,
        compress: true,
        port: 9000
    }
};