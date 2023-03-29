let poids = prompt("Quel est votre poids ?")
let taille = prompt("Quel est votre taille en cemtimetre ?")


function calculerIMC(poids, taille) {
    taille = taille / 100
    return(poids / (taille ** 2))
}

alert("Votre IMC est de " + calculerIMC(poids, taille))