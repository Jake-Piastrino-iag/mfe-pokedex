import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

import { dependencies, devDependencies } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mfe-signup",
      filename: "remoteEntry.js",
      exposes: {
        "./Signup": "./src/pages/Signup.tsx"
      },
      remotes: {},
      shared: ["react", dependencies]
    })
  ]
});
