const WebpackBar = require('webpackbar');
const { PATH } = require('./config');

module.exports = {
  resolve: {
    alias: {
      "~": PATH.src,
      assets: PATH.assets,
      img: `${PATH.assets}/img`,
      style: `${PATH.assets}/scss/style.scss`
    }
  },

  entry: `${PATH.src}/index.js`,

  output: {
    path: `${PATH.output}`,
    filename: "assets/js/bundle.[hash].js",
    publicPath: `/`
  },

  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: [
          {
            loader: "handlebars-loader",
            options: {
              knownHelpersOnly: false,
              helperDirs: [`${PATH.src}/html/helpers`],
              partialDirs: [
                `${PATH.src}/html/partials`,
                `${PATH.src}/html/components`
              ]
            }
          },

          {
            loader: "extract-loader"
          },

          {
            loader: "html-loader"
          }
        ]
      },

      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: `assets/fonts`,
        }
      },

      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/img"
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new WebpackBar({
      name: "Webpack Static"
    })
  ]
};