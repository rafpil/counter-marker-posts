const GetDocFooter = () =>
  "Wygenerowano dnia " +
  new Intl.DateTimeFormat("pl", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date()) +
  " r.";

export default GetDocFooter;
