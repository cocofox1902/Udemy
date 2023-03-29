function Animal(nombreDePattes, poids) {
  this.nombreDePattes = nombreDePattes;
  this.poids = poids;
}
Animal.prototype.presentation = function () {
  console.log(
    "Cette animal possède " +
      this.nombreDePattes +
      " pattes et pèse " +
      this.poids
  );
};

function Oiseau(nombreDePattes, poids, longeurDesAiles) {
  Animal.call(this, nombreDePattes, poids);
  this.longeurDesAiles = longeurDesAiles;
}
Oiseau.prototype = Object.create(Animal.prototype);
Oiseau.prototype.constructor = Oiseau;

function Mammifere(nombreDePattes, poids, typeDePoils) {
  Animal.call(this, nombreDePattes, poids);
  this.typeDePoils = typeDePoils;
}
Mammifere.prototype = Object.create(Animal.prototype);
Mammifere.prototype.constructor = Mammifere;

var perroquet = new Oiseau(2, "1kg", "grandes");
var lion = new Mammifere(4, "200kg", "longs");
var humain = new Animal(4, "70kg");

console.log(perroquet);
perroquet.presentation();
console.log(lion);
lion.presentation();
console.log(humain);
humain.presentation();
