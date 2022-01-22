import React from "react";

const NoDataInfo = () => {
  return (
    <div
      className="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700"
      role="alert"
    >
      <h4 className="text-2xl font-bold leading-tight mb-2 text-center">
        Brak danych do wyświetlenia!
      </h4>
      <hr className="border-green-600 opacity-30" />
      <p className="mt-4 mb-0">
        Uzupełnij powyższy formularz (wszystkie pola są wymagane), a następnie
        kliknij przycisk "Przelicz i dodaj".
      </p>
    </div>
  );
};

export default NoDataInfo;
