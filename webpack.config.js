const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const settings = {
  distPath: path.resolve(__dirname, 'dist'),
  srcPath: path.resolve(__dirname, 'src')
};

const srcPathExtend = subpath => path.resolve(settings.srcPath, subpath);

module.exports = (env, options) => {
  const isDevMode = options.mode === 'development';

  return {
    devtool: isDevMode ? 'cheap-module-source-map' : 'source-map',
    entry: path.resolve(__dirname, './src/index.tsx'),
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    output: {
      path: settings.distPath,
      filename: '[name].[chunkhash].js'
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [{ loader: 'babel-loader' }]
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDevMode
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [require.resolve('autoprefixer')]
                },
                sourceMap: isDevMode
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevMode
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.name': isDevMode
          ? JSON.stringify('development')
          : JSON.stringify('production')
      }),
      new CleanWebpackPlugin({ verbose: true }),
      new HtmlWebpackPlugin({
        template: srcPathExtend('index.html')
      }),
      new CompressionPlugin({ test: /\.js(\?.*)?$/i })
    ],
    optimization: {
      splitChunks: { chunks: 'all' },
      minimize: true,
      minimizer: [
        new TerserPlugin({ test: /\.js(\?.*)?$/i, parallel: true }),
        new HtmlMinimizerPlugin()
      ]
    }
  };
};
