document.getElementById("a-supprimer").remove();

let header = document.createElement("header");
let sous_header = document.createElement("sous-header");
let paragraphe = document.createElement("p");
let body = document.querySelector("body");

body.style.margin = "0";
body.style.fontFamily = "sans-serif";

header.textContent = "Bienvenue";
header.style.backgroundColor = "#e3b04b";
header.style.color = "white";
header.style.padding = "30px";
header.style.fontSize = "3em";
header.style.textAlign = "center";

sous_header.innerHTML =
  "<a href='#'>Accueil</a> / <a href='#'>Une autre page</a>";
sous_header.style.backgroundColor = "#f1d6ab";
sous_header.style.padding = "15px";
sous_header.style.width = "100%";
sous_header.style.display = "block";

paragraphe.textContent = "Ceci est un paragraphe créé avec JavaScript";
paragraphe.style.paddingLeft = "10px";

document.body.append(header, sous_header, paragraphe);
