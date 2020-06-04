const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PATH_SOURCE = path.join(__dirname, '/src');
const PATH_BUILD  = path.join(__dirname, '/dist');

module.exports = (env, argv) => {

    const isDev = argv.mode === 'development'
    const config = {
        entry: {
            // vendor: ["react", "react-dom"],
            index  : PATH_SOURCE + '/index/index.js',
            // root   : PATH_SOURCE + '/root/root.jsx',
            // layout : PATH_SOURCE + '/shared/layout.jsx',
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
        config.devtool = 'inline-source-map'
        config.devServer = {
            port: 8000,
            inline: true,
            // hot: true,
            historyApiFallback: {
                index: 'templates/index/index.html'
            },
            publicPath: '/dist/',
            contentBase: './'
        }
    }else{
        config.plugins.push(
            new OptimizeCSSAssetsPlugin({})
        )
    }

    return config
}