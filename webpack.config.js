const path = require("path"); // outputパスに絶対パスを指定するため
const HtmlWebpackPlugin = require("html-webpack-plugin"); // plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const env = process.env.NODE_ENV || "development";

module.exports = {
  entry: {
    main: path.resolve(__dirname, "front", "index", "index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "static"),
    publicPath: "/static",
    filename: "js/[name].bundle.js",
  },
  mode: env,
  devServer: {
    static: {
      directory: path.join(__dirname, "template"),
    },
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      "@": path.resolve(__dirname, "front"),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "front", "index", "index.html"),
      filename: path.resolve(__dirname, "template", "common", "index.html"),
      inject: "body",
      chunks: ["main"],
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          // console.logの出力削除
          compress: {
            drop_console: true,
          }
        }
      }),
      new CssMinimizerPlugin(),
    ]
  },
  performance: {
    // build後のサイズに関する警告を800KB以内は表示させない
    maxEntrypointSize: 800000,
    maxAssetSize: 800000,
  },
};