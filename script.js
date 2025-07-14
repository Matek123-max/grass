const WORDS = [
  "komputer", "telefon", "las", "lampa", "samolot", "rower", "pizza", "książka", "internet", "szkoła",
  "pies", "kot", "kaktus", "herbata", "samochód", "drzwi", "okno", "but", "kapelusz", "zegar"
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
    if (i === impostorIndex) {
      wordsForPlayers.push("IMPOSTOR");
    } else {
      wordsForPlayers.push(commonWord);
    }
  }

  document.getElementById("start").style.display = "none";
  showPlayerScreen();
}

function showPlayerScreen() {
  document.getElementById("screen").style.display = "block";
  document.getElementById("playerLabel").textContent = `Gracz ${currentPlayer + 1}, to Twoja tura`;
  document.getElementById("wordDisplay").textContent = wordsForPlayers[currentPlayer];
}

function nextPlayer() {
  currentPlayer++;
  if (currentPlayer < playerCount) {
    showPlayerScreen();
  } else {
    document.getElementById("screen").style.display = "none";
    document.getElementById("end").style.display = "block";
  }
}
