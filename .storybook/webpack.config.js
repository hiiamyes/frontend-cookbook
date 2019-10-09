// https://storybook.js.org/docs/configurations/custom-webpack-config/
const path = require("path");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader")
      },
      // Optional
      {
        loader: require.resolve("react-docgen-typescript-loader")
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.alias = {
    src: path.resolve(__dirname, "../src/")
  };
  return config;
};
