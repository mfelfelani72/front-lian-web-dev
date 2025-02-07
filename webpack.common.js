// { for initial

const path = require("path");
const Dotenv = require("dotenv-webpack");
const glob = require("glob");

//  for initial }

// { for optimise

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

// for optimise }

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  entry: "./src/index.js",
  stats: {
    assets: true,
    modules: true,
    timings: true,
    version: true,
    warnings: true,
    errors: true,
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve("dist"),
    publicPath: "/",
    clean: true,
  },

  parallelism: 8, // It usually depends on the number of CPU cores in your computer

  performance: {
    // hints: "warning",
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
    // assetFilter: function (assetFilename) {
    //   return assetFilename.endsWith(".js");
    // },
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    compress: true,
    client: {
      logging: "info",
    },
    port: process.env.PORT,
    // host: '127.0.0.1',
    open: true,
    allowedHosts: 'all',
  },

  plugins: [
   
    new Dotenv({
      path: ".env",
      safe: true,
      systemvars: true,
    }),
    
    new PurgeCSSPlugin({
      paths: glob.sync([
        path.join(__dirname, "src/**/*.css"),
        path.join(__dirname, "src/**/*.js"),
        path.join(__dirname, "src/**/*.jsx"),
        path.join(__dirname, "public/index.html"),
      ]),
      // safelist: {
      //   standard: [
      //     /^bg-/,
      //     /^text-/,
      //     /^xs:/,
      //     /^sm:/,
      //     /^md:/,
      //     /^bi:/,
      //     /^lg:/,
      //     /^xl:/,
      //     /^2xl:/,
      //     /^3xl:/,
      //   ],
      // },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
          // {
          //   loader: "file-loader",
          // },
        ],
      },
    ],
  },

  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    realContentHash: true,
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      maxSize: 20000,
    },
    usedExports: true,
    removeAvailableModules: true,
  },
};
