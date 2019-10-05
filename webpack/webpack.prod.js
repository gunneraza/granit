const { PATH } = require("./config");
const MERGE = require("webpack-merge");
const BASE = require("./webpack.base");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinWebpackPlugin = require('imagemin-webpack-plugin').default;

module.exports = MERGE(BASE, {
  mode: "production",

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",

          MiniCssExtractPlugin.loader,

          {
            loader: "css-loader",
            options: { sourceMap: false }
          },

          {
            loader: "postcss-loader",
            options: {
              sourceMap: false,
              config: { path: `${PATH.dir}/postcss.config.js` }
            }
          }
        ]
      },

      {
        test: /\.scss$/,
        use: [
          "style-loader",

          MiniCssExtractPlugin.loader,

          {
            loader: "css-loader",
            options: { sourceMap: false }
          },

          {
            loader: "postcss-loader",
            options: {
              sourceMap: false,
              config: { path: `${PATH.dir}/postcss.config.js` }
            }
          },

          {
            loader: "sass-loader",
            options: { sourceMap: false }
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HTMLWebpackPlugin({
      template: `${PATH.src}/html/index.hbs`,
      templateParameters: require(`${PATH.src}/html/data/data.js`),
      filename: "index.html",
      minify: {
        html5: true,
        collapseWhitespace: true,
        caseSensitive: true,
        removeComments: true,
        removeEmptyElements: true
      }
    }),

    new MiniCssExtractPlugin({
      filename: `assets/css/[name].css`,
      chunkFilename: `assets/css/[name].css`
    }),

    new CopyWebpackPlugin([
      { from: `${PATH.assets}/img`, to: `${PATH.output}/assets/img` }
    ]),

    new ImageMinWebpackPlugin({
      test: /\.(jpeg|jpg|png|gif|svg)$/i,
      cacheFolder: `${PATH.dir}/webpack/.cache`,

      optipng: {
        optimizationLevel: 4,
      },
      
      pngquant: {
        quality: "65-80"
      },

      jpegtran: {
        progressive: true
      }
    })
  ]
});
