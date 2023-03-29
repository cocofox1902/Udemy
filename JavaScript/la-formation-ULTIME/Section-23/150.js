class Utilisateur {
  constructor(nom, prenom, email) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
  }

  sePresenter() {
    console.log(
      `Je m'appelle ${this.prenom} ${this.nom} mon email est ${this.email}`
    );
  }
}

var mark = new Utilisateur("Zuckerberg", "Mark", "mark@facebook.com");

mark.sePresenter();

class Animal {
  constructor(nombreDePattes, poids) {
    this.nombreDePattes = nombreDePattes;
    this.poids = poids;
  }
  presentation() {
    console.log(
      `Cette animal possède ${this.nombreDePattes} pattes et pèse ${this.poids}`
    );
  }
}

class Oiseau extends Animal {
  constructor(nombreDePattes, poids, longeurDesAiles) {
    super(nombreDePattes, poids);
    this.longeurDesAiles = longeurDesAiles;
  }
  voler() {
    console.log("Je vole");
  }
}

class Mammifere extends Animal {
  constructor(nombreDePattes, poids, typeDePoils) {
    super(nombreDePattes, poids);
    this.typeDePoils = typeDePoils;
  }
  manger() {
    console.log("Je mange");
  }
}

var perroquet = new Oiseau(2, "1kg", "grandes");

console.log(perroquet);
perroquet.presentation();
perroquet.voler();
