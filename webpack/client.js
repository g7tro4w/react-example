const path = require('path')

const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  name: 'client',
  entry: {
    client: path.resolve(__dirname, '../client/'),
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: '[name].[contenthash].js',
    publicPath: '',
    clean: true
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, '../client/components'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: path.resolve(__dirname, '../tsconfig.client.json'),
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot|png|svg)$/,
        use: 'file-loader'
      }
    ],
  },
  watchOptions: {
    aggregateTimeout: 1000,
    poll: 500,
    ignored: /node_modules/,
  },
  plugins: [
    new WebpackManifestPlugin(),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
          { from: path.resolve(__dirname, '../static') }
      ]
  })
  ],
}