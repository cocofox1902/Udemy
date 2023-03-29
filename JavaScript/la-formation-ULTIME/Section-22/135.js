let submit = document.getElementsByClassName("btn")[0];
let number = document.getElementById("prix");
let counter = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let numberToGet = getRandomInt(1000);

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let input = document.getElementById("prix").value;
  counter++;
  if (input == numberToGet) {
    let bravo = document.createElement("div");
    bravo.textContent = `#${counter} Bravo, le nombre ete ${input}`;
    bravo.style.color = "green";
    document.body.append(bravo);
    document.body.appendChild(bravo);
  } else if (input > numberToGet) {
    let moin = document.createElement("div");
    moin.textContent = `#${counter} Moin que ${input}`;
    moin.style.color = "yellow";
    document.body.append(moin);
    document.body.appendChild(moin);
  } else if (input < numberToGet) {
    let plus = document.createElement("div");
    plus.textContent = `#${counter} Plus que ${input}`;
    plus.style.color = "red";
    document.body.append(plus);
    document.body.appendChild(plus);
  }
});
