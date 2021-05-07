// Gets ID/Name and displays them
let pokemonID;
function getID() {
  document.getElementById("run").addEventListener("click", function () {
    pokemonID = document.getElementById("input").value;
    getPokemon();
    // getEvo();
  });
}
getID();

// Capitalize first letter
function capitalizeLTR(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Gets data from API
async function getPokemon() {
  let api_url = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
  const response = await fetch(api_url);
  const data = await response.json();
  const { name, id, sprites } = data;
  document.getElementById("output_name").textContent = `Name: ${capitalizeLTR(name)}`;
  document.getElementById("output_id").textContent = `ID: #${id}`;
  document
    .getElementById("output_img")
    .setAttribute("src", `${sprites.front_default}`);

  // Gets moves & shows different moves for each evo form
  for (let i = 1; i < 6; i++) {
    let moves = data.moves[i * 6].move.name;
    let movesLocation = document.getElementById(`move_${i}`);
    movesLocation.textContent = moves;
    movesLocation.style.display = "block";
  }
}
