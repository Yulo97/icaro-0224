async function getData() {
  const url = "https://swapi.dev/api/people/2";

  const response = await fetch(url);

  console.log(await response.json());
}

const miFuncion = async () => {
  const url = "https://swapi.dev/api/people/2";

  const response = await fetch(url);

  const data = await response.json();

  console.log(data);
};

const miFuncion2 = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.abilities[0]))
    .catch((error) => console.log(error));
};

miFuncion2("https://pokeapi.co/api/v2/pokemon/ditto");
