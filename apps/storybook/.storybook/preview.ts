import type { Preview } from "@storybook/react";
import "leaflet/dist/leaflet.css";
import "../src/tailwind.css";
import "../src/map.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
