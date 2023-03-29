function Utilisateur(prenom, nom, email) {
  this.prenom = prenom;
  this.nom = nom;
  this.email = email;
  this.sePresenter = () => {
    console.log(
      "Bonjour, je m'appelle " +
        this.prenom +
        " " +
        this.nom +
        " et vous pouvez me contacter à l'adresse email " +
        this.email
    );
  };
}

var mark = new Utilisateur("Mark", "Zuckerberg", "mark@facebook.com");
var bill = new Utilisateur("Bill", "Gates", "bill@gatenotes.com");

console.log(mark.prenom);
console.log(bill.prenom);

mark.sePresenter();
bill.sePresenter();

mark.post = "CEO de Facebook";

console.log(mark.post);

function Logement(type, annee, placeDeParking, proprietaire) {
  this.type = type;
  this.annee = annee;
  this.placeDeParking = placeDeParking;
  this.proprietaire = proprietaire;
}

var appartement = new Logement("Appartement", 2014, true, mark);

console.log(appartement.proprietaire.prenom);
