const path = require('path');

const conditional = require('rollup-plugin-conditional');
const notify = require('rollup-plugin-notify');
const resolve = require('rollup-plugin-node-resolve');

const copy = require('rollup-plugin-copy');
const clear = require('rollup-plugin-clear');
const { terser } = require('rollup-plugin-terser');

const postcss = require('rollup-plugin-postcss');
const svelte = require('rollup-plugin-svelte');
const autoPreprocess = require('svelte-preprocess');
const html = require('rollup-plugin-bundle-html');

const PATHS = require('./paths');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  input: {
    app: path.join(PATHS.src, 'index.js'),
    background: path.join(PATHS.src, 'background.js')
  },
  plugins: [
    resolve(),
    copy({
      targets: [{ src: path.join(PATHS.public, '*'), dest: PATHS.build }]
    }),
    postcss({
      extract: true,
      minimize: isProduction,
      sourceMap: true
    }),
    svelte({
      preprocess: autoPreprocess({
        postcss: true
      }),
      dev: !isProduction,
      css: css => css.write(path.join(PATHS.build, 'components.css'))
    }),
    html({
      template: path.join(PATHS.src, 'template.html'),
      filename: 'index.html',
      dest: PATHS.build
    }),
    clear({
      targets: [PATHS.build]
    }),
    conditional(isProduction, [terser()]),
    conditional(!isProduction, [notify()])
  ],
  output: {
    dir: PATHS.build,
    format: 'esm',
    sourcemap: true
  },
  watch: {
    chokidar: true
  }
};
