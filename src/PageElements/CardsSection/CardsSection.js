import React, { useContext } from "react";
import DataContext from "../../Context/DataCtx";
import Card from "../../Components/Card/Card";
import NoDataInfo from "../NoDataInfo/NoDataInfo";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./CardsSection.css";

const CardsSection = () => {
  const dataCtx = useContext(DataContext);

  return (
    <>
      {!dataCtx.data.length && (
        <div className="cards-section--empty-data">
          <div className="max-w-[18rem] sm:max-w-full sm:px-2">
            <NoDataInfo />
          </div>
        </div>
      )}
      <div className="cards-section--cards-view">
        {dataCtx.data.length > 1 && (
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
