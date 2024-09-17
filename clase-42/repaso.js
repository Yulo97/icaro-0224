async function getData() {
  const url = "https://swapi.dev/api/people/2";

  const response = await fetch(url);

  console.log(await response.json());
}

const miFuncion = async () => {
  const response = await fetch("https://fakestoreapi.com/products/1");

  const data = await response.json();

  console.log(data);
};

const miFuncion2 = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

miFuncion("https://pokeapi.co/api/v2/pokemon/ditto");
