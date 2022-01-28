import React, { useContext, useEffect, useState } from "react";
import Table from "../table/table";
import { FaEdit, FaSave } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import DataContext from "../../context/dataCtx";

const Card = ({ item, alloweEdit = true }) => {
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
      <div className="flex justify-center w-[33.333333%]">
        <div className="block rounded-lg shadow shadow-[#062147] bg-white border-2 border-[#142F56] max-w-sm text-center w-full m-2">
          <div className="relative py-3 px-6 font-bold text-[#142F56] border-b border-gray-400 flex justify-center items-center">
            {!editInput && (
              <div className="pt-[4px] pb-[5px] truncate w-[12rem]">
                {" "}
                {valueInput}{" "}
              </div>
            )}
            {editInput && (
              <input
                className="text-center py-[4px] border-b w-[12rem] border-[#142F56] focus-visible:outline-none"
                value={valueInput}
                onChange={changeHandler}
              />
            )}
            {alloweEdit && (
              <div className="absolute flex right-[5px] cursor-pointer">
                {!editInput && (
                  <FaEdit
                    className="mx-1 hover:shadow-2xl hover:shadow-[#062147] hover:text-[#062147]"
                    onClick={() => setEditInput(!editInput)}
                  />
                )}
                {editInput && (
                  <FaSave
                    className="mx-1 hover:shadow-2xl hover:shadow-[#062147] hover:text-[#062147]"
                    onClick={() => {
                      setEditInput(!editInput);
                      dataCtx.edit(item.id, valueInput);
                    }}
                  />
                )}
                {!editInput && (
                  <RiDeleteBin5Fill
                    className="mx-1 hover:shadow-2xl hover:shadow-[#062147] hover:text-[#062147]"
                    onClick={() => dataCtx.remove(item.id)}
                  />
                )}
              </div>
            )}
          </div>
          <div className="p-1">
            <h5 className="text-[#142F56] font-medium mb-2">
              {alloweEdit && (`Kilometrarz: ${item.start} - ${item.finish}`)}
              {!alloweEdit && ('Łączna ilość dla wszystkich danych')}
            </h5>
            <Table item={item} />
          </div>
        </div>
      </div>
  );
};

export default Card;
