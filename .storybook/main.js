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
    "@storybook/addon-webpack5-compiler-swc",
    "@chromatic-com/storybook"
  ],

  webpackFinal: (config) => {
    config.resolve.alias = {
      src: path.resolve(__dirname, "../src/"),
    };
    return config;
  },

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
