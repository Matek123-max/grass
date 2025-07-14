const WORDS = [
  "komputer", "telefon", "las", "lampa", "samolot", "rower", "pizza", "książka", "internet", "szkoła",
  "pies", "kot", "kaktus", "herbata", "samochód", "drzwi", "okno", "but", "kapelusz", "zegar",
  "słońce", "kawiarnia", "miód", "czekolada", "wiatr", "deszcz", "krzesło", "rakieta", "lód", "cukier",
  "trawa", "kubek", "góra", "plaża", "słoik", "talerz", "nos", "ucho", "woda", "papier", "długopis",
  "farba", "szalik", "telewizor", "pilot", "łóżko", "drzewo", "bałwan", "śnieg", "ptak", "dach"
];

let playerCount = 0;
let currentPlayer = 0;
let wordsForPlayers = [];

function startGame(count) {
  playerCount = count;
  currentPlayer = 0;
  wordsForPlayers = [];

  const commonWord = WORDS[Math.floor(Math.random() * WORDS.length)];
  const impostorIndex = Math.floor(Math.random() * playerCount);

  for (let i = 0; i < playerCount; i++) {
    wordsForPlayers.push(i === impostorIndex ? "IMPOSTOR" : commonWord);
  }

  document.getElementById("start").style.display = "none";
  showPlayerScreen();
}

function showPlayerScreen() {
  document.getElementById("screen").style.display = "block";
  document.getElementById("transition").style.display = "none";

  document.getElementById("playerLabel").textContent = `Gracz ${currentPlayer + 1}, to Twoja tura`;
  document.getElementById("wordDisplay").textContent = wordsForPlayers[currentPlayer];
}

function goToTransition() {
  document.getElementById("screen").style.display = "none";
  document.getElementById("transition").style.display = "block";

  const nextPlayer = currentPlayer + 2; // bo currentPlayer jest 0-indeksowany
  if (nextPlayer <= playerCount) {
    document.getElementById("nextPlayerText").textContent = `Przekaż urządzenie Graczowi ${nextPlayer}`;
  }
}

function nextPlayer() {
  currentPlayer++;
  if (currentPlayer < playerCount) {
    showPlayerScreen();
  } else {
    document.getElementById("transition").style.display = "none";
    document.getElementById("end").style.display = "block";
  }
}

