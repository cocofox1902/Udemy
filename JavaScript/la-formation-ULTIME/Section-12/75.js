let monTableau = ["un", "deux", "trois"];

monTableau.splice(1, 0, 'random', 'pie');
console.log(monTableau);

let monTableau2D = [
  ["Mark", "Jeff", "Bill"],
  ["Zuckerberg", "Bezos", "Gates"],
];

monTableau2D.splice(2, 0, ['30', '45', '70']);
console.log(monTableau2D);
