// let heure = 11;

// heure == 11
// heure != 11
// heure > 11
// heure < 11
// heure >= 11
// heure <= 11

// if (heure < 12) {
//    console.log("C'est le midi")
// }
// else if (heure < 18) {
//     console.log("C'est l'aprem")
// }
// else {
//     console.log("C'est la soirée")
// }

let age = prompt("Quel est votre âge ?");
age = parseInt(age);

if (age < 18) {
  alert("Vous êtes mineur");
} else if (age < 21) {
  alert("Vous êtes majeur en France");
} else {
  alert("A vous les casinos !");
}
