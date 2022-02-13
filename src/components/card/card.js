import React, { useContext, useEffect, useState } from "react";
import Table from "../table/table";
import { FaEdit, FaSave } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import DataContext from "../../context/dataCtx";

import "./card.css";

const Card = ({ item, alloweEdit = true, order }) => {
  const [editInput, setEditInput] = useState(false);
  const [valueInput, setValueInput] = useState(item.name);

  const dataCtx = useContext(DataContext);

  useEffect(() => {
    setValueInput(item.name);
  }, [item.name]);

  const changeHandler = (event) => {
    setValueInput(event.target.value);
  };

  return (
    <div className="card-data w-full sm:w-[50%] lg:w-[33.333333%] xl:w-1/4 2xl:w-1/5" style={{ order: order }}>
      <div className="card-body">
        <div className="card-header">
          {!editInput && (
            <div className="card-header--main-text"> {valueInput} </div>
          )}
          {editInput && (
            <input
              className="card-header--input"
              value={valueInput}
              onChange={changeHandler}
            />
          )}
          {alloweEdit && (
            <div className="card-box-icon">
              {!editInput && (
                <FaEdit
                  className="card-icon"
                  onClick={() => setEditInput(!editInput)}
                />
              )}
              {editInput && (
                <FaSave
                  className="card-icon"
                  onClick={() => {
                    setEditInput(!editInput);
                    dataCtx.edit(item.id, valueInput);
                  }}
                />
              )}
              {!editInput && (
                <RiDeleteBin5Fill
                  className="card-icon card-icon--delete"
                  onClick={() => {
                    dataCtx.remove(item.id);
                  }}
                />
              )}
            </div>
          )}
        </div>
        <div className="p-1">
          <h5 className="card-header--sub-text">
            {alloweEdit && `Kilometrarz: ${item.start} - ${item.finish}`}
            {!alloweEdit && "Łączna ilość dla wszystkich danych"}
          </h5>
          <Table item={item} />
        </div>
      </div>
    </div>
  );
};

export default Card;
