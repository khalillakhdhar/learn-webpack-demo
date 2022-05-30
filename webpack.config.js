const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
module.exports = {
    //override de la proprieté par défaut (index.js) => app.js
    entry: {
        main: path.resolve(__dirname, './src/app.js'),
        },
        //override de la proprieté par défaut (dist) => deploy
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'deploy')
            },
    plugins: [
        new HtmlWebpackPlugin(
            {title: "Webpack demo"}
        ),
    ]
};
