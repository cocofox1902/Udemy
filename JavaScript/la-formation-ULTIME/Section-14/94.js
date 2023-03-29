let fruits = ["fraise", "banane", "poire"];
let aliments = ["chocolat", "sucre", "lait", ...fruits];

console.log(aliments);

let phrase = "Bonjour !";
let phraseTableau = [...phrase];

console.log(phraseTableau);

let devises = ["dollars", "euro", "yen"];
// let premiereDevise = devises[0];
// let autres = [devises[1], devises[2]];

let [premiereDevise, ...autres] = devises

console.log(premiereDevise);
console.log(autres);
