const GetTableHeader = () => {
  let tableHeader = [{ text: "CYFRA", style: "header" }];

  for (let i = 0; i < 10; i++) {
    tableHeader.push({
      text: i,
      style: "subheader",
    });
  }
  return tableHeader;
};
export default GetTableHeader;
