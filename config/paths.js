"use strict";

const path = require("path");

export default {
  src: path.resolve(__dirname, "src"),
  build: path.resolve(__dirname, "build"),
  public: path.resolve(__dirname, "public"),
  modules: path.resolve(__dirname, "node_modules")
};
