import React, { useContext } from "react";
import DataContext from "../../context/dataCtx";
import Card from "../../components/card/card";
import NoDataInfo from "../../components/noDataInfo/noDataInfo";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const CardsSection = () => {
  const dataCtx = useContext(DataContext);

  return (
    <>
      <div className="flex flex-row justify-center py-4">
        <div className="">{!dataCtx.data.length && <NoDataInfo />}</div>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {dataCtx.data.length !== 0 && (
          <Card key={`card-total`} item={dataCtx.total} alloweEdit={false} order={1} />
        )}
        <TransitionGroup component={null}>
          {dataCtx.data.length !== 0 &&
            dataCtx.data.map((item) => (
              <CSSTransition
                key={item.id}
                timeout={300}
                classNames="card-animation"
              >
                <Card key={`card-${item.id}`} item={item}  order={item.position}/>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </div>
    </>
  );
};

export default CardsSection;
