import React from "react";

const Card = ({item}) => {
  return (
    <div className="flex justify-center">
      <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
        <div className="py-3 px-6 border-b border-gray-300">{item.name}</div>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            
          </h5>
          <p className="text-gray-700 text-base mb-4">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
