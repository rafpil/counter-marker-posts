import React from "react";

import "./NoDataInfo.css";

const NoDataInfo = () => {
  return (
    <div className="no-data-info" role="alert">
      <h4 className="no-data-info--header">Brak danych do wyświetlenia!</h4>
      <hr className="no-data-info--hr" />
      <p className="no-data-info--paragraf">
        Uzupełnij powyższy formularz (wszystkie pola są wymagane), a następnie
        kliknij przycisk "Przelicz i dodaj".
      </p>
    </div>
  );
};

export default NoDataInfo;
