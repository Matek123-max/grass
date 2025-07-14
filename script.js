const WORDS = [
  "komputer", "telefon", "las", "lampa", "samolot", "rower", "pizza", "książka", "internet", "szkoła",
  "pies", "kot", "kaktus", "herbata", "samochód", "drzwi", "okno", "but", "kapelusz", "zegar"
];

let playerCount = 0;
let currentPlayer = 0;
let wordsForPlayers = [];

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(div => div.style.display = "none");
  document.getElementById(screenId).style.display = "block";
}

function startGame(count) {
  playerCount = count;
  currentPlayer = 0;
  wordsForPlayers = [];

  const commonWord = WORDS[Math.floor(Math.random() * WORDS.length)];
  const impostorIndex = Math.floor(Math.random() * playerCount);

  for (let i = 0; i < playerCount; i++) {
    wordsForPlayers.push(i === impostorIndex ? "IMPOSTOR" : commonWord);
  }

  showPlayerScreen();
}

function showPlayerScreen() {
  document.getElementById("playerLabel").textContent = `Gracz ${currentPlayer + 1}, to Twoja tura`;
  document.getElementById("wordDisplay").textContent = wordsForPlayers[currentPlayer];
  showScreen("wordScreen");
}

function goToTransition() {
  const nextPlayerNum = currentPlayer + 2;
  const message = (currentPlayer + 1 < playerCount)
    ? `Przekaż urządzenie Graczowi ${nextPlayerNum}`
    : `Wszyscy gracze widzieli swoje słowa`;

  document.getElementById("nextPlayerText").textContent = message;
  showScreen("transitionScreen");
}

function nextPlayer() {
  currentPlayer++;
  if (currentPlayer < playerCount) {
    showPlayerScreen();
  } else {
    showScreen("endScreen");
  }
}
