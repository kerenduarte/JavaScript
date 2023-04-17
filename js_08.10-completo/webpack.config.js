const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
   mode: 'development',
   context: path.resolve(__dirname, 'src'), 
   entry: {
      app: './app/index.js',
      blog: './blog/blog.js',
      vendor: './vendor/vendor.js'
   },     
   output: {
      filename: '[name].[contenthash].js',  
      path: path.resolve(__dirname, 'dist')
   },   
   devServer: {
      contentBase: './dist',
      open: true  
   },
   plugins: [
      new HtmlWebpackPlugin({
         filename: 'index.html',
         template: 'index.html',
         chunks: ['app', 'vendor']
      }),
      new HtmlWebpackPlugin({
         filename: 'blog.html',
         template: 'blog.html',
         chunks: ['blog']
      }),
      new CleanWebpackPlugin(),
      new CopyPlugin({
         patterns: [
            { from: "images", to: "images" },
            { from: "favicon.ico", to: "favicon.ico" }
         ]
      })
   ],
   module : {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
         },
         {
            test: /\.(png|jpe?g|svg)$/,
            use: {
               loader: 'url-loader',
               options: {
                  limit: 8192,
                  name: 'images/[hash]-[name].[ext]'
               }
            }
         }
      ]
   },
   devtool: 'source-map'
}