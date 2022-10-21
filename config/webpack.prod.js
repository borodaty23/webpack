const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  plugins: [],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimizer: [
      new TerserWebpackPlugin(),
      new CssMinimizerPlugin({
        test: /\.css$/i,
      }),
    ],
  },
  module: {
    rules: [],
  },
});
