import React, { useContext } from "react";
import DataContext from "../../context/dataCtx";
import Card from "../../components/card/card";
import NoDataInfo from "../NoDataInfo/NoDataInfo";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./CardsSection.css";

const CardsSection = () => {
  const dataCtx = useContext(DataContext);

  return (
    <>
      <div className="cards-section--empty-data">
        <div className="">{!dataCtx.data.length && <NoDataInfo />}</div>
      </div>
      <div className="cards-section--cards-view">
        {dataCtx.data.length !== 0 && (
          <Card
            key={`card-total`}
            item={dataCtx.total}
            alloweEdit={false}
            order={1}
          />
        )}
        <TransitionGroup component={null}>
          {dataCtx.data.length !== 0 &&
            dataCtx.data.map((item) => (
              <CSSTransition
                key={item.id}
                timeout={300}
                classNames="card-animation"
              >
                <Card
                  key={`card-${item.id}`}
                  item={item}
                  order={item.position}
                />
              </CSSTransition>
            ))}
        </TransitionGroup>
      </div>
    </>
  );
};

export default CardsSection;
