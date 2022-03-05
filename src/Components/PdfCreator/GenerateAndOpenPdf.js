import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import GetPageFooter from "./PagePdf/HelperPageFunctions/GetPageFooter";
import GenerateAndReturnContentPdfPage from "./PagePdf/GenerateAndReturnContentPdfPage";
import pdfMetaDate from "./PagePdf/HelperPageFunctions/PdfMetaDate";


pdfMake.vfs = pdfFonts.pdfMake.vfs;

let docDefinition = (dataCtx) => ({
  info: pdfMetaDate,
  pageSize: "A4",
  pageMargins: [20, 20, 20, 30],
  footer: function (currentPage, pageCount, pageSize) {
    return {
      columns: [
        {
          width: pageSize.width / 2,
          text: GetPageFooter(),
          margin: [20, 0],
        },
        {
          width: pageSize.width / 2,
          text: currentPage + "/" + pageCount,
          alignment: "right",
          margin: [20, 0],
        },
      ],
    };
  },
  content: GenerateAndReturnContentPdfPage(dataCtx),
  styles: {
    header: {
      fontSize: 10,
      bold: true,
      margin: [0, 5, 0, 5],
    },
    subheader: {
      fontSize: 10,
      alignment: "center",
      bold: true,
      margin: [0, 5, 0, 5],
    },
    roadName: {
      fontSize: 12,
      margin: [0, 15, 0, 5],
    },
    h1: {
      bold: true,
      fontSize: 14,
      alignment: "center",
      margin: [0, 15, 0, 5],
    },
  },
});

let GenerateAndOpenPdf = (dataCtx) => {
  pdfMake.createPdf(docDefinition(dataCtx)).open();
};

export default GenerateAndOpenPdf;