function calculator() {
  let choix;
  let nombreUn;
  let nombreDeux;
  let result;
  do {
    choix = prompt(
      "Que souhaitez-vous faire ?\n\n1 - Addition\n2 - Multiplication\n3 - Soustraction\n4 - Division\n"
    );
  } while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

  do {
    nombreUn = prompt("Quel est le premier nombre ?");
  } while (isNaN(nombreUn));
  nombreUn = Number(nombreUn);
  do {
    nombreDeux = prompt("Quel est le Deuxieme nombre ?");
  } while (isNaN(nombreDeux));
  nombreDeux = Number(nombreDeux);

  function addition(nombreA, nombreB) {
    return nombreA + nombreB;
  }

  function multiplication(nombreA, nombreB) {
    return nombreA * nombreB;
  }

  function soustraction(nombreA, nombreB) {
    return nombreA - nombreB;
  }

  function division(nombreA, nombreB) {
    if (nombreDeux == 0) {
      return "Erreur on ne peux pas diviser par zero";
    }
    return nombreA / nombreB;
  }

  if (choix == 1) {
    result = addition(nombreUn, nombreDeux);
  } else if (choix == 2) {
    result = multiplication(nombreUn, nombreDeux);
  } else if (choix == 3) {
    result = soustraction(nombreUn, nombreDeux);
  } else {
    result = division(nombreUn, nombreDeux);
  }
  alert(result);
}

while (true) {
  calculator();
}
