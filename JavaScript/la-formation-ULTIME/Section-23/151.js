class Utilisateur {
  constructor(nom, prenom, email) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
  }

  get nomComplet() {
    return `${this.prenom} ${this.nom}`;
  }

  set nomComplet(valeur) {
    [this.prenom, this.nom] = valeur.split(" ");
  }

  sePresenter() {
    console.log(
      `Je m'appelle ${this.prenom} ${this.nom} mon email est ${this.email}`
    );
  }
}

var mark = new Utilisateur("Zuckerberg", "Mark", "mark@facebook.com");

console.log(mark.nomComplet);
mark.nomComplet = "Bill Gates";
console.log(mark.nomComplet);
