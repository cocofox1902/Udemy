const url = "https://blockchain.info/ticker";

let requete = new XMLHttpRequest();

function requestDo() {
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();

  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        let prixEnEuros = reponse.EUR.last;
        document.getElementById("price_label").textContent = prixEnEuros;
      } else {
        alert("Un problème est intervenu, merci de revenir plus tard.");
      }
    }
  };
}

setInterval(requestDo, 1000);
