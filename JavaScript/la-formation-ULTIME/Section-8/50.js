try {
  let recompense = prompt("Choisissez une récompense : epee, arc, hache");
  let degats;
  switch (recompense) {
    case "epee":
        degats = 40;
        break;
    case "arc":
        degats = 30;
        break;
    case "hache":
        degats = 20;
        break;
    default:
        throw new Error("Vous n'avez pas choisi une récompense valide.");
  }
  alert("Vous avez choisi " + recompense + " et vous infligez " + degats + " points de dégats.")
} catch (error) {
  alert(error);
}
finally {
    alert("Fin du programme.");
}
