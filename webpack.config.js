const path = require("path");
const fs = require("fs");
const TampermonkeyHeaderPlugin = require("./plugins/TampermonkeyHeaderPlugin");
const UpdateVersionPlugin = require("./plugins/UpdateVersionPlugin");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new UpdateVersionPlugin(),
    // new TampermonkeyHeaderPlugin()
  ],
};
