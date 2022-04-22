const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  // webpackFinal: async (config, { configType }) => {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ['@svgr/webpack'],
  //     type: 'javascript/auto',
  //     include: path.resolve(__dirname, '../'),
  //   }); // Return the altered config

  //   return config;
  // },
  core: {
    builder: 'webpack5',
  },
};
