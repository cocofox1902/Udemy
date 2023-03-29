let gareDeDepart = "Paris";
let gareDArrivee = prompt("Quelle est la gare d'arrivée ?") || "Gare du Nord";
let chauffeur = "Jean";

if ((gareDeDepart != "" || gareDArrivee != "") && chauffeur != "") {
  alert("le train va partir de " + gareDArrivee);
} else {
  alert("le train ne peut pas partir");
}

// let x = 5

// x > 3 ? console.log("x est plus grand que 3") : console.log("x est plus petit que 3")

// if (x > 3) {
//     console.log("x est plus grand que 3")
// }
// else {
//     console.log("x est plus petit que 3")
// }
