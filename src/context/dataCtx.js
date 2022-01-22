import React, { useState } from "react";

const DataContext = React.createContext({
  data: [],
  add: () => {},
  remove: () => {},
});

export const DataContextProvider = (props) => {
  const [data, setData] = useState([]);
  
  const add = (itemToAdd) => {
    setData(data.concat([itemToAdd]));
  }

  const remove = (itemToRemove) => {
      
  }
  

  return (
    <DataContext.Provider
      value={{
        data: data,
        add: add,
        remove: remove,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
