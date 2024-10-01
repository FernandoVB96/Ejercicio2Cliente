 // Almacenando el elemento cuyo id es cardContainer
 const cardContainer = document.getElementById("cardContainer");

 // 1) Eliminar el primer elemento hijo desde el padre
 cardContainer.removeChild(cardContainer.firstElementChild);

 // 2) Eliminar, desde él mismo, el elemento cuya clase es "cards redClass"
 cardContainer.removeChild(document.querySelector(".cards.redClass"));

 // 3) Crear un elemento h1 con vuestro nombre
 const h1nombre = document.createElement("h1");
 h1nombre.textContent = "Fernando Vaquero";

 // 4) Crear un elemento enlace con texto "Vedruna" y cuyo href sea la pagina del vedruna
 const enlace = document.createElement("a");
 enlace.href = "https://vedrunasevilla.org/";
 enlace.textContent = "Vedruna";

 // 5) Crear un elemento botón cuyo id sea "botonJoker" y su texto sea "boton"
 const boton = document.createElement("button");
 boton.id = "botonJoker";
 boton.textContent = "boton";

 // 6) Crear un elemento div cuya clase sea "cards greenClass"
 const elementoDiv = document.createElement("div");
 elementoDiv.classList.add("cards", "greenClass");

 // 7) Añadir al elemento div creado anteriormente los h1, enlace y botón creados anteriormente
 elementoDiv.appendChild(h1nombre);
 elementoDiv.appendChild(enlace);
 elementoDiv.appendChild(boton);

 // 8) Añadir a cardContainer el div del apartado anterior
 cardContainer.appendChild(elementoDiv);