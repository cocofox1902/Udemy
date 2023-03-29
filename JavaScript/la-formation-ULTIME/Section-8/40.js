let consommable = "dinde";

switch (consommable) {
    case "carotte":
    case "pomme de terre":
        console.log("C'est un legume");
        break;

    case "banane":
    case "pomme":
        console.log("C'est un fruit");
        break;
    
    default:
        console.log("Je ne connais pas ce produit");
}