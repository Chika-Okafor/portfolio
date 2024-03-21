import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     // Define your custom aliases here
  //     "@components": resolve(__dirname, "src/components"),
  //     "@utils": resolve(__dirname, "src/utils"),
  //     "@styles": resolve(__dirname, "src/styles"),
  //   },
  // },
  // css: {
  //   modules: {
  //     // Enable CSS modules globally
  //     scopeBehaviour: "global",
  //   },
  // },
  // server: {
  //   // Configure the server options if needed
  // },
  // build: {
  //   // Configure the build options
  // },
  // define: {
  //   // Define your environment variables here
  //   "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  //   "process.env.API_URL": JSON.stringify("https://example.com/api"),
  // },
  // esbuild: {
  //   // Configure ESBuild options, including polyfills
  //   target: "es2015", // Specify the target environment for ESBuild
  //   jsxFactory: "React.createElement", // Specify the JSX factory function
  //   jsxFragment: "React.Fragment", // Specify the JSX fragment syntax
  // },
});
