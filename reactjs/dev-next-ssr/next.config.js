const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const withPlugins = require("next-compose-plugins");

const NEXT_CONFIG = {
    distDir: '../.next'
};

const PLUGINS = [
    [withTypescript],
    [withSass,{
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 1,
            // localIdentName: '[local]__[hash:base64:5]'
            localIdentName: '[local]'
          },
        sassLoaderOptions: {
            includePaths: ['./src']
        }
      }
    ]
  ];

  module.exports = withPlugins(PLUGINS, NEXT_CONFIG);