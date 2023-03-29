if (localStorage.getItem("name")) {
  document.body.innerHTML = "Welcome " + localStorage.getItem("name");
} else {
  localStorage.setItem("name", prompt("What is your name?"));
  document.body.innerHTML = "Welcome " + localStorage.getItem("name");
}
