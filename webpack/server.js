const path = require('path')

const CopyPlugin = require('copy-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  name: 'server',
  entry: {
    server: path.resolve(__dirname, '../server/'),
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  externals: [nodeExternals()],
  target: 'node',
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: path.resolve(__dirname, '../tsconfig.server.json'),
        },
      },
      {
        test: /\.css$/,
        use: [
          'ignore-loader'
        ]
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{
          context: 'server',
          from: path.resolve(__dirname, '../templates'),
          to: path.resolve(__dirname, '../templates')
      }],
    }),
    new MiniCssExtractPlugin()
  ],
}