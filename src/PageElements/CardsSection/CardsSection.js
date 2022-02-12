import React, { useContext } from "react";
import DataContext from "../context/dataCtx";
import Card from "../components/card/card";
import NoDataInfo from "../components/noDataInfo/noDataInfo";

const DataCard = () => {
  const dataCtx = useContext(DataContext);
  
  return (
    <>
      <div className="flex flex-row justify-center py-4">
        <div className="">{!dataCtx.data.length && <NoDataInfo />}</div>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {dataCtx.data.length !== 0 && (
          <Card key={`total`} item={dataCtx.total} alloweEdit={false} />
        )}
        {dataCtx.data.length !== 0 &&
          dataCtx.data.map((item, index) => (
            <Card key={`card-${index}`} item={item} />
          ))}
      </div>
    </>
  );
};

export default DataCard;
