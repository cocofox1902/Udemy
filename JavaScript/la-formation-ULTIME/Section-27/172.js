let ville = "Paris";
let intervalID;

function getMeteo() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric`;
  let requete = new XMLHttpRequest();
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();

  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        document.getElementById("temperature_label").textContent =
          requete.response.main.temp;
        document.getElementById("ville").textContent = ville;
      } else {
        alert("Un problème est intervenu, merci de revenir plus tard.");
        clearInterval(intervalID);
        ville = "Paris";
        intervalID = setInterval(getMeteo, 1000, ville);
      }
    }
  };
  console.log("first");
}

changer.addEventListener("click", () => {
  ville = prompt("Quelle ville souhaitez-vous voir ?");
});

intervalID = setInterval(getMeteo, 1000, ville);

getMeteo();
