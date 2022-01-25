import React from "react";

const Table = ({ item }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="overflow-hidden">
          <table className="w-full text-[#142F56]">
            <thead className="bg-white">
              <tr className="bg-gray-100">
                <th
                  scope="col"
                  className="font-bold text-[#142F56] px-2 py-4 text-center border border-[#142F56]"
                >
                  Cyfra
                </th>
                <th
                  scope="col"
                  className="font-bold text-[#142F56] px-2 py-4 text-center border border-[#142F56] min-w-[40%]"
                >
                  Hektometry
                </th>
                <th
                  scope="col"
                  className="font-bold text-[#142F56] px-2 py-4 text-center border border-[#142F56] min-w-[40%]"
                >
                  Kilometry
                </th>
              </tr>
            </thead>
            <tbody>
              {item.km.map((el, index) => (
                <tr key={`tr-${index}`} className="hover:bg-[#142F56] hover:text-white">
                  <td className="px-1 py-[5px] min-w-min whitespace-nowrap font-medium border border-[#142F56]">
                    {index}
                  </td>
                  <td className="font-light px-1 py-[5px] whitespace-nowrap border border-[#142F56]">
                    {item.he[index]}
                  </td>
                  <td className="font-light px-1 py-[5px] whitespace-nowrap border border-[#142F56]">
                    {item.km[index]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
