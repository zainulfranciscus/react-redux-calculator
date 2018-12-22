require('react-hot-loader/patch');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {

  mode: 'development',

  entry: ['babel-polyfill', 'react-hot-loader/patch', './src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: './assets', to: 'assets/'}
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.NamedModulesPlugin()
  ],
  devtool: 'source-map'
}