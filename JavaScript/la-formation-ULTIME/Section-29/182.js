const url = "https://blockchain.info/ticker";

async function requestDo() {
  const request = await fetch(url, {
    method: "GET",
  });

  if (!request.ok) {
    throw new Error(`HTTP error! status: ${request.status}`);
  }
  else {
    const response = await request.json();
    // console.log(response.EUR.last);
    document.getElementById("price_label").textContent = response.EUR.last;
  }
}

setInterval(requestDo, 1000);
