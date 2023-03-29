const url = "https://blockchain.info/ticker";

$.ajax({
  url: url,
  type: "GET",
  dataType: "json",
  success: (data) => {
    $("h1").text(data.EUR.last + " €");
  },
  error: (error) => {
    alert(error);
  },
});

const url2 = "https://lesoublisdelinfo.com/api.php";

$.ajax({
  url: url2,
  type: "POST",
  data: "prenom=John",
  dataType: "json",
  success: (data) => {
    $("#monId").text(data.resultat);
  },
  error: (error) => {
    alert(error);
  },
});
