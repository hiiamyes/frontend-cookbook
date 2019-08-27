import { getFormattedValue } from "./utils";

const effectiveKeys = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  ".",
  "Backspace",
  "Delete",
  "ArrowLeft",
  "ArrowTop",
  "ArrowRight",
  "ArrowBottom",
  "Escape",
  "Tab"
];

const effectiveKeyPairs = [
  ["Meta", "a"],
  ["Meta", "c"],
  ["Meta", "v"],
  ["Meta", "x"],
  ["Control", "a"],
  ["Control", "c"],
  ["Control", "v"],
  ["Control", "x"]
];

let pressedKeys = [];

const onInputKeyDown = ({
  setKey,
  setCharBeforeCaret,
  setCharAfterCaret
}) => e => {
  if (pressedKeys.indexOf(e.key) === -1) {
    pressedKeys.push(e.key);
  }
  const {
    target: { value, selectionStart }
  } = e;
  if (
    effectiveKeys.indexOf(e.key) === -1 &&
    effectiveKeyPairs
      .map(keyPair => keyPair.join("+"))
      .indexOf(pressedKeys.join("+")) === -1
  ) {
    e.preventDefault();
  }
  if (e.key === "." && (selectionStart !== value.length || /\./.test(value))) {
    e.preventDefault();
  }
  // Get the chars before and after the caret before the change event.
  setCharBeforeCaret(value.split("")[selectionStart - 1]);
  setCharAfterCaret(value.split("")[selectionStart]);
  // The change event doesn't have key, so get the key ffrom keydown event.
  setKey(e.key);
};

const onInputKeyUp = () => {
  pressedKeys = [];
};

const onInputChange = ({
  value,
  max,
  minUnit,
  key,
  charBeforeCaret,
  charAfterCaret,
  setCaretPositionFromEnd,
  setFormattedValue,
  onChange
}) => e => {
  let {
    target: { value: newValue, selectionStart }
  } = e;
  if (+newValue.replace(/,/g, "") > max) newValue = String(max);
  let newCaretPositionFromEnd = newValue.length - selectionStart;
  switch (key) {
    case "Backspace":
      if (/\.$/g.test(newValue)) {
        newValue = newValue.replace(".", "");
        break;
      }
      if (charBeforeCaret === "." && String(value).indexOf(".") !== -1) {
        newValue =
          newValue.slice(0, selectionStart - 1) +
          "." +
          newValue.slice(selectionStart);
      }
      if (charBeforeCaret === ",") {
        newValue =
          newValue.slice(0, selectionStart - 1) +
          newValue.slice(selectionStart);
      }
      break;
    case "Delete":
      if (charAfterCaret === ".") {
        newCaretPositionFromEnd = newCaretPositionFromEnd - 1;
        newValue =
          newValue.slice(0, selectionStart) +
          "." +
          newValue.slice(selectionStart + 1);
      }
      if (charAfterCaret === ",") {
        newCaretPositionFromEnd = newCaretPositionFromEnd - 1;
        newValue =
          newValue.slice(0, selectionStart) +
          newValue.slice(selectionStart + 1);
      }
      if (/\.$/g.test(newValue)) {
        newValue = newValue.replace(".", "");
      }
      break;
    default:
      break;
  }

  if (minUnit > 1 && newValue !== "") {
    const newValueNumber = +newValue.replace(/,/g, "");
    if (value === null || value === undefined || value === "") {
      newCaretPositionFromEnd = minUnit.length - 1;
      newValue = String(newValueNumber * minUnit);
    } else if (value === 0 && newValueNumber < minUnit) {
      newCaretPositionFromEnd = minUnit.length - 1;
      newValue = String(newValue.replace("0", "").split("")[0] * minUnit);
    } else if (newValueNumber < minUnit) {
      newValue = "0";
    } else if (
      key !== "Backspace" &&
      key !== "Delete" &&
      newCaretPositionFromEnd < minUnit.length - 1
    ) {
      newCaretPositionFromEnd = minUnit.length - 1;
      newValue = String(value);
    }
  }
  newValue = getFormattedValue({ value: newValue, minUnit });
  setFormattedValue(newValue);
  setCaretPositionFromEnd(newCaretPositionFromEnd);
  const newValueNumber = +newValue.replace(/,/g, "");
  if (newValueNumber !== value) {
    onChange(newValueNumber);
  }
};

export { onInputKeyUp, onInputKeyDown, onInputChange };
