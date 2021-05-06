// Gets ID/Name and displays them
let pokemonID;
function getID() {
  document.getElementById("run").addEventListener("click", function () {
    pokemonID = document.getElementById("input").value;
    getPokemon();
  });
}
getID();

// Gets data from API
async function getPokemon() {
  let api_url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
  const response = await fetch(api_url);
  const data = await response.json();
  const { name, id, sprites } = data;
  document.getElementById("output_name").textContent = `Name: ${name}`;
  document.getElementById("output_id").textContent = `ID: #${id}`;
  document
    .getElementById("output_img")
    .setAttribute("src", `${sprites.front_default}`);
}
