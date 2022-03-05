import ConvertAndGetRowTable from "./HelperTableFunctions/ConvertAndGetRowTable";
import GetTableHeader from "./HelperTableFunctions/GetTableHeader";
import GetRoadNameRow from "./HelperTableFunctions/GetRoadNameRow";

const CreateTable = (roadData) => ({
  table: {
    headerRows: 2,
    keepWithHeaderRows: true,
    dontBreakRows: true,
    widths: [70, "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
    body: [
      GetRoadNameRow(roadData.name),
      GetTableHeader(),
      ConvertAndGetRowTable("kilometry", roadData.km),
      ConvertAndGetRowTable("hektometry", roadData.he),
    ],
  },
});

export default CreateTable;
