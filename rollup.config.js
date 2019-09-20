import resolve from "rollup-plugin-node-resolve";
// import external from "rollup-plugin-peer-deps-external";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

export default {
  input: "index.js",
  output: [
    {
      file: "o.js",
      format: "iife",
      name: "frontendCookbook"
    },
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    }
  ],
  external: ["react", "styled-components"],
  plugins: [
    // external(),
    resolve(),
    commonjs({
      include: "node_modules/**"
    }),
    babel({
      exclude: "node_modules/**"
    })
  ]
};
