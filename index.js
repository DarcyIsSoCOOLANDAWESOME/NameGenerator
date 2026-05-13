const clickMe = document.querySelector(".btn");
const nameTextIdentifier = document.querySelector("#getName");

const names = [
  "The Bull",
  "The Limerick Lion",
  "The Mountain",
  "The Beast",
  "The Highland Oak",
  "The Albatross",
  "The Moose",
  "The Dark Horse",
];

function getStrongmanName() {
  const randName = Math.floor(Math.random() * names.length);
  const indexToName = names[randName];
  nameTextIdentifier.innerText = indexToName;
  return console.log(indexToName);
}

clickMe.addEventListener("click", function (e) {
  getStrongmanName();
});
