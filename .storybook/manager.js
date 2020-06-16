// manager.js configures Storybook's "manager" UI that wraps the preview, and also configures addons panel.

import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "dark",
  brandTitle: "Frontend Cookbook",
});

addons.setConfig({
  panelPosition: "bottom",
  theme,
});
