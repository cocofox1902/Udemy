const prommesse = new Promise((resolve, reject) => {});

function chargerScript(script) {
  return new Promise((resolve, reject) => {
    let element = document.createElement("script");
    element.src = script;
    document.head.append(element);

    element.onload = () => resolve("Script chargé");

    element.onerror = () =>
      reject(new Error(`Script ${script} n'a pas pu être chargé`));
  });
}

const prommesse2 = chargerScript("test.js");

// prommesse2.then(
//   (result) => console.log(result),
//   (error) => console.log(error)
// );

chargerScript("test.js").catch((error) => console.log(error));
