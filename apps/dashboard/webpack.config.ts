import * as HtmlWebPackPlugin from "html-webpack-plugin";
import { container } from "webpack";
import { dependencies } from "./package.json";

const { ModuleFederationPlugin } = container;

export default {
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"]
  },
  devServer: {
    port: 8083
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
      name: "mfe_dashboard",
      filename: "remoteEntry.js",
      remotes: {
        mfe_forms: "mfe_forms@http://localhost:8081/remoteEntry.js"
      },
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
