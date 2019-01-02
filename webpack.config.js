const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.vue?$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
        // 将样式抽取出来为独立的文件
        // loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader"),
        // exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './src/index.html'),
      // inject: true
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['vue', '.json', '.js', '.jsx', '.css'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    },
  },
  devtool: 'source-map',
  devServer: {
    // publicPath: path.join('/dist/'),
    port: 8888,
    contentBase: path.join(__dirname, './dist'),
    hot: true,
    historyApiFallback: true
  }
};