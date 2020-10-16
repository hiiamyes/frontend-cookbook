import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import alias from "@rollup/plugin-alias";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "es",
      sourcemap: true,
      compact: true,
    },
  ],
  external: [
    "react",
    "react-com",
    "styled-components",
    "leaflet",
    "lodash",
    "d3",
    "react-router-dom",
    "classnames",
  ],
  plugins: [
    resolve(),
    commonjs({
      include: "node_modules/**",
    }),
    babel({
      exclude: "node_modules/**",
    }),
    alias({
      entries: [
        { find: "src", replacement: path.resolve(__dirname, "./src/") },
      ],
    }),
    terser(),
  ],
};
