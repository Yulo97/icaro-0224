let body = document.querySelector("body");
let moveButton = document.getElementById("move");
let colorButton = document.getElementById("color");
let floatButton = document.getElementById("float");
let astro = document.querySelector("#astronauta");

let x = 50;
let y = 50;
let scale = 1;

document.addEventListener("keypress", (event) => {
  switch (event.key) {
    case "a":
      moveAstro(10);
      break;
    case "w":
      moveAstro(null, -10);
      break;
    case "s":
      moveAstro(null, 10);
      break;
    case "d":
      moveAstro(-10);
      break;
    case "+":
      scaleAstro(0.2);
      break;
    case "-":
      scaleAstro(-0.2);
      break;
    case "Enter":
      alert("Hello Space");
      break;
    case "r":
      moveButton.removeEventListener("click", handleClickMove);
      break;

    default:
      break;
  }
});

const moveAstro = (ejeX = 0, ejeY = 0) => {
  x += ejeX;
  y += ejeY;

  astro.style.right = x + "%";
  astro.style.top = y + "%";
};

const scaleAstro = (num = 0) => {
  scale += num;
  astro.style.scale = scale;
};

const handleClickMove = () => {
  x = 50;
  y = 50;
  scale = 1;

  scaleAstro();
  moveAstro();
};

moveButton.addEventListener("click", handleClickMove);

colorButton.addEventListener("click", () => {
  body.style.backgroundColor = getRandomColor();
});

floatButton.addEventListener("click", () => {
  x = 50;
  y = 10;
  scale = 1;

  moveAstro();
  scaleAstro();
});

function getRandomColor() {
  // Genera un número aleatorio entre 0 y 16777215 (0xFFFFFF)
  const randomColor = Math.floor(Math.random() * 16777215);

  // Convierte el número a un string hexadecimal y le agrega el '#'
  const color = `#${randomColor.toString(16).padStart(6, "0")}`;

  return color;
}
