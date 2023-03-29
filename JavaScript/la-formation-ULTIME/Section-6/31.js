function demanderAge() {
    let age = prompt("Quel est votre âge ?");
    // age = parseInt(age);
    // age = parseFloat(age);
    age = Number(age);

    // let nombre = 45;
    // nombreEnString = nombre + "";
    // nombreEnString = nombre.toString();
    alert("Vous avez " + (age + 1) + " ans.");
}

demanderAge();
