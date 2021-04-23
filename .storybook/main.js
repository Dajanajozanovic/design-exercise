const path = require('path')

module.exports = {
  stories: ['../src/styles/**/*.stories.js'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-design-assets',
    {
      name: '@storybook/addon-essentials',
      options: {
        controls: false,
        actions: true,
        docs: false,
      },
    },
  ]
}
