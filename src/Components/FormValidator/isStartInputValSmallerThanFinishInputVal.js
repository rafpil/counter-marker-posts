const isStartInputValSmalerThanFinishInputVal = (
  startInputVal,
  finishInputVal
) => {
  if (
    parseFloat(startInputVal.replace(/(,|\+)/gm, ".")) <
    parseFloat(finishInputVal.replace(/(,|\+)/gm, "."))
  ) {
    return true;
  } else {
    return false;
  }
};

export default isStartInputValSmalerThanFinishInputVal;
