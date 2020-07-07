import path from "path";
import unixify from "unixify";

import conditional from "rollup-plugin-conditional";
import notify from "rollup-plugin-notify";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

import copy from "rollup-plugin-copy";
import clear from "rollup-plugin-clear";
import { terser } from "rollup-plugin-terser";

import postcss from "rollup-plugin-postcss";
import svelte from "rollup-plugin-svelte";
import autoPreprocess from "svelte-preprocess";
import html from "rollup-plugin-bundle-html";
import json from "rollup-plugin-json";
import url from "@rollup/plugin-url";

import PATHS from "./config/paths";

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  input: {
    app: path.join(PATHS.src, "index.js"),
  },
  plugins: [
    resolve(),
    commonjs(),
    copy({
      targets: [
        {
          src: unixify(path.join(PATHS.public, "*")),
          dest: unixify(PATHS.build),
        },
      ],
    }),
    postcss({
      extract: true,
      minimize: isProduction,
      sourceMap: true,
    }),
    svelte({
      preprocess: autoPreprocess({
        postcss: true,
      }),
      dev: !isProduction,
      css: (css) => css.write(path.join(PATHS.build, "components.css")),
    }),
    html({
      template: path.join(PATHS.src, "template.html"),
      filename: "index.html",
      dest: PATHS.build,
    }),
    json(),
    url(),
    clear({
      targets: [unixify(PATHS.build)],
      watch: true,
    }),
    conditional(isProduction, [terser()]),
    conditional(!isProduction, [notify()]),
  ],
  output: {
    dir: PATHS.build,
    format: "iife",
    sourcemap: true,
  },
  watch: {
    chokidar: true,
  },
};
