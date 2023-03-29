function bonjour(prenom) {
  let resultat = "Bonjour " + prenom;
  let maClosure = () => console.log(resultat);
  return(maClosure);
}

let maFunction = bonjour('Evan');
maFunction()