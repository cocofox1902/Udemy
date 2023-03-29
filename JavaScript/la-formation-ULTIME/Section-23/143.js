let mark = {
  prenom: "Mark",
  nom: "Zuckerberg",
  email: "mark@facebook.com",

  sePresenter: function () {
    console.log("Bonjour, je m'appelle " + this.prenom);
  },
};

mark.sePresenter();

function recevoirLesCoordonnees() {
  return { latitude: 35, longitude: 139 };
}

let coordonnes = recevoirLesCoordonnees();
console.log(coordonnes.latitude);
console.log(coordonnes.longitude);