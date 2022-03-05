import GetPageHeader from "./HelperPageFunctions/GetPageHeader";
import CreateTable from "../TablePdf/CreateTable";

const GenerateAndReturnContentPdfPage = (roadDataCtx) => {
  let contentPdfPage = [];

  contentPdfPage.push(GetPageHeader());

  for (let i = 0; i < roadDataCtx.data.length; i++) {
    contentPdfPage.push(CreateTable(roadDataCtx.data[i]));
  }

  contentPdfPage.push(CreateTable(roadDataCtx.total));

  return contentPdfPage;
};

export default GenerateAndReturnContentPdfPage;
