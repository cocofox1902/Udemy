let dateActuelle = new Date();

console.log(navigator.language);

let dateLocale = dateActuelle.toLocaleString("fr-FR", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

console.log(dateLocale);
