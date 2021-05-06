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

  // Gets moves & shows different moves for each evo form
  for (let i = 1; i < 6; i++) {
    let moves = data.moves[i * 10].move.name;
    let movesLocation = (document.getElementById(
      `move_${i}`
    ).textContent = moves);
  }
}

// Gets evolved Pokemon

// async function getEvo() {
//   let api_url = `https://pokeapi.co/api/v2/evolution-chain/${pokemonID}`;
//   const response = await fetch(api_url);
//   const data = await response.json();
//   const evo = data;
// }

// EVOLUTION ORDER
// console.log(evo.chain.species.name); #1
// console.log(evo.chain.evolves_to[0].species.name); #2
// console.log(evo.chain.evolves_to[0].evolves_to[0].species.name); #3
