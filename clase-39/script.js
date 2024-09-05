// ¡Nuevo! Combinaciones de teclas … Las combinaciones de teclas de Drive se han actualizado para que puedas navegar escribiendo las primeras letras

const astronauta = document.getElementById("astronauta");
const fondo = document.getElementById("fondo");
const moveButton = document.getElementById("move");
const colorButton = document.getElementById("color");
const floatButton = document.getElementById("float");

function moverDerecha() {
  if (astronauta.style.marginLeft) {
    let nuevaPosicion = +astronauta.style.marginLeft.substring(
      0,
      astronauta.style.marginLeft.length - 2
    );
    astronauta.style.marginLeft = +nuevaPosicion + 700 + "px";
  } else {
    astronauta.style.marginLeft = astronauta.style.marginLeft + "700px";
  }
}

function achicarAstronauta() {
  astronauta.style.transform = "scale(0.6)";
}

function agrandarAstronauta() {
  astronauta.style.transform = "scale(1.2)";
}

function reiniciarPosicionAstronauta() {
  astronauta.style.marginLeft = "0px";
  astronauta.style.marginTop = "35vh";
}

function astronautaBordeSuperior() {
  astronauta.style.marginTop = "10px";
}

function cambiarFondo() {
  fondo.style.backgroundColor = "#420a8d";
}

function desplazarAstronauta() {
  moverDerecha();
  achicarAstronauta();
}

function volverPosicionInicial() {
  reiniciarPosicionAstronauta();
  agrandarAstronauta();
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    desplazarAstronauta();
  } else if (event.code === "Enter") {
    alert("Hello Space!");
  } else if (event.code === "KeyR") {
    moveButton.disabled = "true";
  }
});

moveButton.addEventListener("click", function (event) {
  volverPosicionInicial();
});

colorButton.addEventListener("click", function () {
  cambiarFondo();
});

floatButton.addEventListener("click", function () {
  astronautaBordeSuperior();
});
