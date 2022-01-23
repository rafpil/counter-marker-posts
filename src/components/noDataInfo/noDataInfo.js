import React from "react";

const NoDataInfo = () => {
  return (
    <div
      className="bg-blue-100 rounded-lg py-5 px-6 mb-4 text-base text-[#142F56] border-[#142F56] border-[1px]"
      role="alert"
    >
      <h4 className="text-2xl font-bold leading-tight mb-2 text-center">
        Brak danych do wyświetlenia!
      </h4>
      <hr className="border-blue-600 opacity-30" />
      <p className="mt-4 mb-0">
        Uzupełnij powyższy formularz (wszystkie pola są wymagane), a następnie
        kliknij przycisk "Przelicz i dodaj".
      </p>
    </div>
  );
};

export default NoDataInfo;
