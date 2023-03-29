if (localStorage.getItem("theme")) {
  document.body.classList.add(localStorage.getItem("theme"));
}

let span = document.querySelector("span");
document.getElementById("mode").addEventListener("click", function () {
  if (localStorage.getItem("theme") === "dark") {
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark");
    span.textContent = "Thème clair";
  } else {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
    span.textContent = "Thème sombre";
  }
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  span.textContent = "Thème sombre";
} else {
  document.body.classList.remove("dark");
  span.textContent = "Thème clair";
}
