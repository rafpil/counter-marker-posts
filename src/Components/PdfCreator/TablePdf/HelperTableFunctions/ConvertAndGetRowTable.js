const ConvertAndGetRowTable = (firstCellDescription, contextDataToConvert) => {
    let rowTable = [{ text: firstCellDescription.toUpperCase(), style: "header" }];

    for (let i = 0; i < contextDataToConvert.length; i++) {
        rowTable.push({
          text: contextDataToConvert[i],
          style: "subheader",
        });
    }
    return rowTable;
}
export default ConvertAndGetRowTable;