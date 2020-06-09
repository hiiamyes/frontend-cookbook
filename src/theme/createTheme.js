import baseTheme from "src/theme/baseTheme";

const createTheme = (theme) => {
  return { ...baseTheme, ...theme };
};

export default createTheme;
