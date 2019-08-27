/**
 * @param {value} String
 * @param {minUnit} String
 */
const getFormattedValue = ({ value, minUnit }) => {
  if (value === null || value === undefined || value === "") {
    return "";
  }
  let formattedValue = "";
  if (+value === 0 && value !== "0.") {
    formattedValue = "0";
  } else if (minUnit >= 1) {
    formattedValue = String(
      Math.floor(+value.replace(/,/g, "") / minUnit) * minUnit
    ).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    const fixedDigits = minUnit.length - 2;
    const decimalPoint = ".";
    let [numberPart, decimalPart = ""] = value.split(decimalPoint);
    if (decimalPart.length > fixedDigits) {
      decimalPart = decimalPart.replace(/,/, "").slice(0, 2);
    }
    formattedValue =
      numberPart.replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
      (/\./.test(value) ? decimalPoint : "") +
      decimalPart;
  }
  return formattedValue;
};

export { getFormattedValue };
