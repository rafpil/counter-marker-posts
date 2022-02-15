import React, { useState } from "react";
import { AddToTotal, RemoveFromTotal } from "../components/counter/counter";

const DataContext = React.createContext({
  data: [],
  total: [],
  add: () => {},
  edit: () => {},
  remove: () => {},
});

export const DataContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState({name: 'Suma', km: [0,0,0,0,0,0,0,0,0,0], he: [0,0,0,0,0,0,0,0,0,0]});
  
  const add = (itemToAdd) => {
    setData(data.concat([itemToAdd]));
    setTotal(AddToTotal(itemToAdd, total));
  }

  const edit = (idItemToEdit, nameToEdit) => {
    let indexToEdit = data.findIndex(item => item.id === idItemToEdit);
    data[indexToEdit].name = nameToEdit; 
  }

  const remove = (idItemToRemove) => {
    let newdata = data.filter(item => item.id !== idItemToRemove);
    setData(newdata);
    setTotal(RemoveFromTotal(data[data.findIndex(item => item.id === idItemToRemove)], total));
  }
  

  return (
    <DataContext.Provider
      value={{
        data: data,
        total: total,
        add: add,
        edit: edit,
        remove: remove,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
