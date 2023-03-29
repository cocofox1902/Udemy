let prenom = "John";
let bonjour = "Bonjour " + prenom;
console.log(bonjour);

let bonjour2 = `Bonjour ${prenom}`;
console.log(bonjour2);

let date = new Date().getFullYear();
let copyrigth = `${date} @ Moi`;
console.log(copyrigth);

let aliments = { fruits: 5, legumes: 3, biscuits: 10 };
let panier = `J'ai ${aliments.fruits} fruits, ${aliments.legumes} légumes et ${
  aliments.biscuits
} biscuits. Soit ${
  aliments.fruits + aliments.legumes + aliments.biscuits
} aliments.`;
console.log(panier);
