/**
 * @type {import('next').NextConfig}
 */
const processEnv = process.env;
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['urlencoded-body-parser']);

const nextConfig = {
  distDir: './.next',
  webpack: (config) => {
    config.resolve.modules = [...config.resolve.modules, '../src'];
    return config;
  },

   // env: {
   //   COMMUNITY_PROJECT_NODE_ENV: processEnv.COMMUNITY_PROJECT_NODE_ENV,
   //   COMMUNITY_PROJECT_API_URI: processEnv.COMMUNITY_PROJECT_API_URI
   // },
};

var PLUGINS = [[withTM]];

if (processEnv.ANALYZE === 'true') {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: processEnv.ANALYZE === 'true',
  });
  PLUGINS = [[withBundleAnalyzer], [withTM]];
}

module.exports = nextConfig
