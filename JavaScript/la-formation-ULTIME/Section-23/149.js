let gandalf = { titre: "Magicien" };

function direBonjour(arme, degats) {
  console.log(
    "Bonjour " +
      this.titre +
      ", possédez " +
      arme +
      " qui donne " +
      degats +
      " de dégats."
  );
}

direBonjour.apply(gandalf, ["un baton", 20]);
direBonjour.call(gandalf, "un baton", 20);

this.valeur = "Window";

let monObjet = {
  valeur: "Objet",
  getValeur: function () {
    console.log(this.valeur);
  },
};

monObjet.getValeur();

let maValeur = monObjet.getValeur;
maValeur();

let maValeurAvecBind = monObjet.getValeur.bind(monObjet);
maValeurAvecBind();
