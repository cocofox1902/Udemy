let preparation = 10, cuisson = 15;

function cuisiner(nombreDeGateaux, minutesDePreparation = 10, minutesDeCuisson = 15) {
    return(nombreDeGateaux * (minutesDePreparation + minutesDeCuisson));
}

let tempsDePreparationChocolat = cuisiner(4);
let tempsDePreparationFraisier = cuisiner(1, 20);

console.log(tempsDePreparationFraisier + tempsDePreparationChocolat);