const purgecss = require('@fullhuman/postcss-purgecss');

const production = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env'),
    require('tailwindcss'),
    require('autoprefixer'),
    production &&
      purgecss({
        content: ['./src/**/*.svelte', './src/**/*.html'],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
      })
  ]
};
