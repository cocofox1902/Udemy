let a = document.querySelector("a");
let button = document.querySelector("button");

a.addEventListener("click", () => {
  if (confirm("Etes-vous sure ?")) {
    location.href = "https://google.com";
  }
});

button.addEventListener("mouseenter", () => {
  document.body.style.backgroundColor = "orange";
});

button.addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "white";
  });
  