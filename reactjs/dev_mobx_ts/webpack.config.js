const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PATH_SOURCE = path.join(__dirname, '/src');
const PATH_BUILD = path.join(__dirname, '/dist');

module.exports = (env, argv) => {
  const isDevelopmentMode = argv.mode === 'development';
  const config = {
    mode: argv.mode,
    entry: {
      vendors: ['react', 'react-dom'],
      index: PATH_SOURCE + '/index.tsx',
    },

    module: {
      rules: [{
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: {
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react",
                ],
                plugins: [
                    ["@babel/plugin-proposal-decorators", { "legacy": true}],
                    ["@babel/plugin-proposal-class-properties", { "loose": true}]
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
              options: {
                sourceMap: isDevelopmentMode
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopmentMode
              }
            }
          ]
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },

    output: {
      path: PATH_BUILD,
      filename: '[name]/[name].js',
      chunkFilename: '[name]/[name].[chunkhash].chunk.js',
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
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    }
  }

  if ( isDevelopmentMode ) {
    config.devtool = 'inline-source-map'
    config.optimization = {
      minimize: false
    }

    config.plugins.push(
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false
          }
        }
      }),
    )

  } else {
    config.plugins.push(
      new OptimizeCSSAssetsPlugin({}),
      new CleanWebpackPlugin(['dist'])
    )
    config.optimization = {
      minimize: true
    }
  }

  return config;
}