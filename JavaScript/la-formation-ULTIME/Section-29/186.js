const url = "https://lesoublisdelinfo.com/api.php";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

axiosInstance
  .post(
    url,
    new URLSearchParams({
      prenom: "John",
    })
  )
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    alert(error);
  });
