async function direBonjour() {
  const promesse = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Bonjour");
    }, 2000);
  });
  let resultat = await promesse;
  console.log(resultat);
}

direBonjour();

// async function resultat() {
//   try {
//     const scriptA = chargerScript("test.js");
//     console.log(scriptA);
//     const scriptB = chargerScript("test2.js");
//     console.log(scriptB);
//   } catch (error) {
//     console.log(error);
//     document.head.lastChild.remove();
//   }
// }

// resultat();
