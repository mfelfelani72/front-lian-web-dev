const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

// { for optimise

const HTMLWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const zlib = require("zlib");
const TerserPlugin = require("terser-webpack-plugin");

const DevModeBanner = require("./webpack-files/dev-mode/DevModeBanner.js")
const RemoveManifest = require("./webpack-files/dev-mode/RemoveManifest.js")
const UnregisterServiceWorker = require('./webpack-files/service-worker/unregister/UnregisterServiceWorker.js');

// for optimise }

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
      inject: "body",
      scriptLoading: "defer",
      minify: true,
      favicon: './assets/images/icon-512x512.png',
    }),

    // new DevModeBanner(),

    new RemoveManifest(),

    new UnregisterServiceWorker(),
  
    new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.(js|jsx|css|html|svg)$/,
      // test: /\.(js|jsx|css|html)$/,
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: {
        level: zlib.constants.Z_BEST_COMPRESSION,
      },
    }),

  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: true,
          mangle: true,
          format: {
            comments: false,
          },
        },
        extractComments: false,
        parallel: true,
      }),
      
    ],

  },
});
