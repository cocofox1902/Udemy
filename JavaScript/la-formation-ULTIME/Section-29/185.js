const url = "https://blockchain.info/ticker";

function requestDo() {
  axios
    .get(url)
    .then(function (response) {
      document.getElementById("price_label").textContent =
        response.data.EUR.last;
    })
    .catch(function (error) {
      alert(error);
    });
}

setInterval(requestDo, 1000);
