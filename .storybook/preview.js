// preview.js configures the "preview" iframe that renders your components.
import React from "react";
import { addParameters, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import createTheme from "src/theme/createTheme";

import "src/styles/global-style.css";
import "antd/dist/antd.css";
import "leaflet/dist/leaflet.css";

addParameters({
  options: {
    showAddonPanel: false,
  },
});

addDecorator((story) => (
  <ThemeProvider theme={createTheme()}>{story()}</ThemeProvider>
));
