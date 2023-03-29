let button = document.querySelector('button')
let div = document.querySelector('div')
let hidden = true;

div.style.display = "none";

button.addEventListener('click', () => {
    if (hidden) {
        button.textContent = "Cacher"
        div.style.display = "block";
        hidden = false;
    }
    else {
        button.textContent = "Afficher"
        div.style.display = "none";
        hidden = true;
    }
})