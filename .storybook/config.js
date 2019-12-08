import { addParameters, configure } from "@storybook/react";
import theme from "./theme";

addParameters({
  options: {
    theme,
    showAddonPanel: false
  }
});

// automatically import all files ending in *.stories.js
const req = require.context("../src/stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
