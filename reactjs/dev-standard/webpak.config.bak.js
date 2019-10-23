const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PATH_SOURCE = path.join(__dirname, '/src');
const PATH_BUILD  = path.join(__dirname, '/dist');

module.exports = (env, argv) => {

  const isDev = argv.mode === 'development'
  const Config = {
    entry: {
      // vendor: ["react", "react-dom"],
      index  : PATH_SOURCE + '/index/server.js',
      root   : PATH_SOURCE + '/root/root.js',
      layout : PATH_SOURCE + '/shared/layout.js',
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react"
              ]
            }
          }]
        },
        {
          test: /\.s?css$/,
          use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: { sourceMap: isDev ? true : false },
              },
              {
                loader: 'sass-loader',
                options: { sourceMap: isDev ? true : false },
              }
          ],
        }
      ]
    },

    output: {
      path: PATH_BUILD,
      filename: '[name]/[name].js',
      // chunkFilename: '[name]/[name].chunk.js'
    },

    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.css', '.scss', '.json'],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]/[name].css'
        })
    ],
  }

  if( isDev ){
    Config.devtool = 'inline-source-map'
    Config.devServer = {
      port: 8000,
      inline: true,
      // hot: true,
      historyApiFallback: true,
      publicPath: '/dist/',
      contentBase: './'
    }
  }else{
    Config.plugins.push( new OptimizeCSSAssetsPlugin({}) )
  }

  return Config
}