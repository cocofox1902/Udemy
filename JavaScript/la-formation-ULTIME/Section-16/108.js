document.write("test1");

document.body.append("test2");

let helloWorld = document.createElement("div");
helloWorld.textContent = "Hello World !";
document.body.append(helloWorld);
// document.body.appendChild(helloWorld)

// document.body.insertBefore(helloWorld, document.querySelector(".container"));

document.querySelector(".container").prepend(helloWorld);
