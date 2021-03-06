import { rgba } from "polished";

const teal500 = "#009688";
const teal700 = "#00796b";
const teal900 = "#004d40";
const gray600 = "#757575";

const baseTheme = {
  height: "36px",
  borderRadius: "4px",
  padding: "0 16px",
  colorText: "white",
  colorEnable: teal700,
  colorTableHover: rgba(teal700, 0.3),
  colorHover: teal500,
  colorPressed: teal900,
  colorFocused: teal500,
  colorDisabled: gray600,
  colorPress: teal900,
  colorFocus: teal500,
  colorDisable: gray600,

  //
  colorBorderDefault: "rgb(204, 204, 204)",
  colorBorderHover: "rgb(179, 179, 179)",
  colorBorderFocus: "rgb(70, 146, 245)",

  //
  colorMainBlue: "#4357ef",
  colorPrimary: teal700,
  colorSecondary: "#545b64",
  colorTertiary: "#a9b0b7",
  colorPrimaryAlt: "#232658",
  colorSecondaryAlt: "#8e8fa8",
  colorTertiaryAlt: "#bdbdcc",
  colorAssistive1: "#eeeef0",
  colorAssistive2: "#cbcdd0",
  colorAssistive3: "#edeeef",
  colorAssistive4: "#eceefd",
  colorRed: "#ff4c33",
  colorGreen: "#28b76c",
  colorPurple: "#5b4ad8",
  colorOrange: "#f4bf0e",
  colorWhite: "#ffffff",
  colorPopup: "#ffffff",

  backgroundColorApp: "rgba(84, 91, 100, 0.1)",
  backgroundColorDivider: "#edeeef",
  backgroundColorInput: "#ffffff",
  backgroundColorTd: "#ffffff",

  paddingLeft: "14px",
  paddingInput: "0 14px",
  paddingButton: "10px 0",
  paddingButtonLarge: "21px 0",

  heightNavBar: "67px",
  heightInput: "37px",
  heightLink: "37px",
  heightButton: "37px",

  borderRadius: "4px",

  // Typography
  fontSizeH1: "28px",
  lineHeightH1: "36px",
  fontSizeH2: "24px",
  lineHeightH2: "30px",
  fontSizeH3: "18px",
  lineHeightH3: "23px",
  fontSizeH4: "16px",
  lineHeightH4: "21px",
  fontSizeH5: "14px",
  lineHeightH5: "18px",
  fontSizeH6: "12px",
  lineHeightH6: "15px",

  // Elevation
  zIndexToast: 101,
  zIndexNavBar: 100,
  zIndexModal: 99,
  zIndexModalCloseIndex: 100,
};

export default baseTheme;
