const path = require('path')

const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

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
    clean: true,
  },
  resolve: {
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
    ],
  },
  watchOptions: {
    aggregateTimeout: 1000,
    poll: 500,
    ignored: /node_modules/,
  },
  plugins: [
    new WebpackManifestPlugin()
  ],
}