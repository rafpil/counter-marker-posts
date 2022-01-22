import React, { useContext } from "react";
import DataContext from "../context/dataCtx";
import Card from "../components/card/card";
import NoDataInfo from "../components/noDataInfo/noDataInfo";

const DataCard = () => {

  const dataCtx = useContext(DataContext);

  return (
    <>
      <div className="flex flex-row justify-center gap-3">
        <div className="">{!dataCtx.data.length && <NoDataInfo />}</div>
      </div>
      <div className="flex flex-row justify-center gap-3">
        {dataCtx.data.map((item, index) => (
          <Card key={`card ${index}`} item={item} />
        ))}
      </div>
    </>
  );
};

export default DataCard;
