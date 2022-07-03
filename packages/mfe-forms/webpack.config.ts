import * as HtmlWebPackPlugin from "html-webpack-plugin";
import { container } from "webpack";
import { dependencies } from "./package.json";

const { ModuleFederationPlugin } = container;

export default {
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    fallback: { crypto: require.resolve("crypto-browserify"), stream: require.resolve("stream-browserify") }
  },
  devServer: {
    port: 8081
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "mfe-forms",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./App": "./src/App"
      },
      shared: {
        ...dependencies,
        "mfe-ui-components": {
          singleton: true
        },
        react: {
          singleton: true,
          requiredVersion: dependencies.react
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"]
        }
      }
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    })
  ]
};
