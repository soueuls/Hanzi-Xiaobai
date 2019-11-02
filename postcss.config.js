const devMode = process.env.NODE_ENV === 'development';

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    tailwindcss: {},
    '@fullhuman/postcss-purgecss': !devMode
      ? {
          content: ['./src/**/*.svelte'],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }
      : false,
    cssnano: !devMode ? {} : false
  }
};
