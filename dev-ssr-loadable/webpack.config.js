const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;
const ReactLoadableSSRAddon = require('react-loadable-ssr-addon');

const PATH_SOURCE = path.join(__dirname, '/src');
const PATH_BUILD = path.join(__dirname, '/dist');

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';
  const config = {
    entry: {
      // vendor: [
      //   'react',
      //   'react-dom',
      //   'react-router-dom'
      // ],
      layout: `${PATH_SOURCE}/layout/main.js`
    },

    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ],
              plugins: [
                require('@babel/plugin-proposal-class-properties'),
                require('@babel/plugin-proposal-object-rest-spread'),
                require('@babel/plugin-syntax-dynamic-import')
              ],
            }
          },
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDev ? true : false
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDev ? true : false
              },
            }
          ],
        }
      ]
    },

    output: {
      path: PATH_BUILD,
      filename: '[name]/[name].js',
      chunkFilename: '[name]/[name].chunk.js',
    },

    resolve: {
      modules: [
        path.join(__dirname, 'src'),
        'node_modules'
      ],
      extensions: ['.js', '.jsx', '.css', '.scss', '.json'],
    },

    optimization: {
      splitChunks: {
        name: false,
        cacheGroups: {
          vendors: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            minChunks: 1,
            priority: -10,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },

    plugins: [
      new MiniCssExtractPlugin({filename: '[name]/[name].css'})
    ]
  }

  if ( isDev ) {
    config.devtool = 'inline-source-map'
  } else {
    config.plugins.push(
      new OptimizeCSSAssetsPlugin({})
    )
  }

  return config
}












