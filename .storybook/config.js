import React from "react";
import { addParameters, addDecorator, configure } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import createTheme from "src/theme/createTheme";
import theme from "./theme";

addParameters({
  options: {
    theme,
    showAddonPanel: false,
  },
});

// automatically import all files ending in *.stories.js
const req = require.context("../src/stories", true, /\.stories\.js$/);
const loadStories = () => {
  req.keys().forEach((filename) => req(filename));
};

addDecorator((story) => (
  <ThemeProvider theme={createTheme()}>{story()}</ThemeProvider>
));

configure(loadStories, module);
