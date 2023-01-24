const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const path = require('path');

module.exports = {
    //entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'docs'),
        filename: 'bundle.js'
    },    
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
        ],
      },
      optimization: {
        minimizer: [         
          new CssMinimizerPlugin(),
        ],
      },
      plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",
        minify:true,
      }),
      new MiniCssExtractPlugin()
    ],
      devtool: "eval-source-map",
}