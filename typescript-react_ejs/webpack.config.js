const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PATH_SOURCE = path.join(__dirname, '/src');
const PATH_BUILD = path.join(__dirname, '/dist');

module.exports = (env, argv) => {
  const isDevelopmentMode = argv.mode === 'development';

  const config = {
    mode: argv.mode,
    entry: {
      index: PATH_SOURCE + '/index/index.tsx',
    },

    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {sourceMap: isDevelopmentMode ? true : false}
            },
            {
              loader: 'sass-loader',
              options: {sourceMap: isDevelopmentMode ? true : false}
            }
          ]
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader'
        }
      ]
    },

    output: {
      path: PATH_BUILD,
      filename: '[name]/[name].js',
      chunkFilename: '[name].chunk.js',
    },

    resolve: {
      modules: [path.join(__dirname, 'src'), 'node_modules'],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.json'],
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name]/[name].css'
      })
    ],

    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  };


  if (isDevelopmentMode) {
    config.devtool = 'inline-source-map'
    config.optimization = {
      minimize: false
    }
  } else {
    config.plugins.push(
      new OptimizeCSSAssetsPlugin({})
    )
    config.optimization = {
      minimize: true
    }
  }

  return config;
}
