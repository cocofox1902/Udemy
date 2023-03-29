const url = "https://lesoublisdelinfo.com/api.php";

async function prenomPOST(prenom) {
  const request = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
        prenom: prenom,
    }),
  });

  if (!request.ok) {
    alert(`HTTP error! status: ${request.status}`);
  } else {
    const response = await request.json();
    console.log(response);
  }
}

prenomPOST("John");
