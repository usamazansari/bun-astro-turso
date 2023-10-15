import purgecss from '@fullhuman/postcss-purgecss';

const config = {
  content: ['./dist/**/index.html', './dist/**/*.js'],
  safelist: [/(xs|sm|md|lg|xl|focus|hover|dark):*/],
};

export default { plugins: [purgecss({ ...config })] };
