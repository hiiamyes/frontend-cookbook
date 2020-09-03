// main.js is the main point of configuration for storybook.

const path = require("path");

module.exports = {
  stories: [
    "../src/stories/**/*.stories.js",
    "../src/components/**/*.stories.js",
  ],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
  ],
  webpackFinal: (config) => {
    config.resolve.alias = {
      src: path.resolve(__dirname, "../src/"),
    };
    return config;
  },
};
