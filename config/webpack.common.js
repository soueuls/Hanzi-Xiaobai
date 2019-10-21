const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = require("./paths");

// To re-use webpack configuration across templates,
// CLI maintains a common webpack configuration file - `webpack.common.js`.
// Whenever user creates an extension, CLI adds `webpack.common.js` file
// in template's `config` folder
module.exports = {
  entry: {
    app: PATHS.src + "/app.js",
    background: PATHS.src + "/background.js"
  },
  output: {
    // the build folder to output bundles and assets in.
    path: PATHS.build,
    // the filename template for entry chunks
    filename: "[name].js"
  },
  module: {
    rules: [
      // Check for images imported in .js files and
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
              name: "[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: PATHS.public,
        to: PATHS.build
      }
    ]),
    new HtmlWebpackPlugin({
      title: "Hanzi xiaobai",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }
    })
  ]
};
