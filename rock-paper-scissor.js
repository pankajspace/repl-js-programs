const options = ["rock", "paper", "scissors", "spock", "lizard"];

const amit = {
  name: "Amit",
  value: getRandomSelection(options)
}

const bipin = {
  name: "Bipin",
  value: getRandomSelection(options)
}

function getRandomSelection(options) {
  return options[Math.floor(Math.random() * 5)];
}

const getWinner = (player, opponent) => {
  const pairs = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
  }

  console.log(player, opponent)

  if (player.value == opponent.value) {
    return `Draw`;
  }

  if (pairs[player.value].includes(opponent.value)) {
    return `Winner: ${player.name}`;
  }

  return `Winner: ${opponent.name}`
}
console.log(getWinner(amit, bipin));

// ----------------------------------------------------------
// Simple example

// const options = ["rock", "paper", "scissor"];

// function getRandomSelection(options) {
//   return options[Math.floor(Math.random() * 3)];
// }

// const getWinner = (player, opponent) => {
//   const pairs = {
//     rock: "scissor",
//     scissor: "paper",
//     paper: "rock",
//   }

//   console.log(player, opponent)

//   if (player.value == opponent.value) {
//     return `Draw`;
//   }

//   if (pairs[player.value] == opponent.value) {
//     return `Winner: ${player.name}`;
//   }

//   return `Winner: ${opponent.name}`
// }
// console.log(getWinner(amit, bipin));