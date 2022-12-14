const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };

  if (!isDev) {
    config.minimizer = [
      new TerserWebpackPlugin(),
      new CssMinimizerPlugin({
        test: /\.css$/i,
      }),
    ];
  }
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  //входная точка
  entry: {
    main: "./index.js",
  },
  // куда мы складываем результат работы вебпака
  output: {
    filename: "[name].[contenthash].js",
    // __dir системная переменная указывающая на текущую дерикторию
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 9000,
    open: true,
    hot: isDev,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: "./index.html",
      inject: true,
    }),
    new CleanWebpackPlugin(),
    // process.env.NODE_ENV === "development" &&
    //   new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  optimization: optimization(),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[hash].min[ext]",
        },
      },
      {
        test: /\.(otf|ttf|eot|woff|woff2)$/,
        type: "asset/resource",
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
