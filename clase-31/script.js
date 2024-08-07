const consultarPokemon = () => {
  const nombrePoke = document.getElementById("nombrePok").value.toLowerCase();

  fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePoke}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("nombre-pokemon").innerText = data.name;
      document.getElementById("peso-pokemon").innerText = data.weight;
      document.getElementById("imagen-pokemon").src = data.sprites.front_default;
    });
};
