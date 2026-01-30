/**
 * PostCSS Configuration
 *
 * @description PostCSS plugins for CSS processing including
 * imports and nesting support.
 */
export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
  },
};
