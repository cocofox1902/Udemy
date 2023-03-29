let voitureA = {
  constructeur: "Tesla",
  modele: "Cybertruck",
};

let voitureB = {
  constructeur: "Renault",
  modele: "Espace",
};

let voitures = new WeakSet([voitureA, voitureB]);

// voitures.delete(voitureA);

console.log(voitures);
