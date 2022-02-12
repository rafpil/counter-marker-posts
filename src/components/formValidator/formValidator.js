export const isInputBlur = (selectInputTouched) => {
  selectInputTouched(true);
};

export const isCorrectFormatInputLength = (inputValue) => {
  if (/\b(\d*(,|\+)\d\d\d)\b/gm.exec(inputValue) !== null) {
    return true;
  } else {
    return false;
  }
}