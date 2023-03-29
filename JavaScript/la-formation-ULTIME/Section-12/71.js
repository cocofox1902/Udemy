let monTableau = ["un", "deux", "trois"];

monTableau.push('quatre')
monTableau.unshift('zero')
// console.log(monTableau)

let monTableau2D = [
  ["Mark", "Jeff", "Bill"],
  ["Zuckerberg", "Bezos", "Gates"],
];

monTableau2D[0].push('test');
// console.log(monTableau2D);

let monTableauAssociatif = {
  prenom: "Mark",
  nom: "Zuckerberg",
  poste: "PDG de Facebook",
};

monTableauAssociatif['natinalite'] = 'Americaine';
console.log(monTableauAssociatif);
