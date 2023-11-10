let currentImage = 1;
let totalChanges;
let changesRemaining;

const sprueche = [
  "Küsse jemanden einvernehmlich",
  "Gib jemanden einen Shot aus",
  "gib einer fremden Person ein Kompliment für sein/ihr Kostüm",
  "sammle 5 high-fives",
  "finde dein Kostüm-zwilling und macht ein Selfie",
  "sag deiner Begleitung wie sehr du sie magst!",
  "zeig deinen besten Dancemove",
  "lächel mal, du siehst gut aus",
  "Du siehst durstig aus, trink ein schluck",

];

function startGame() {
  const inputNumber = document.getElementById('inputNumber').value;

  if (inputNumber >= 1 && inputNumber <= 8) {
    totalChanges = inputNumber;
    changesRemaining = totalChanges;
    changeImage();
  } else {
    alert('Bitte eine Zahl zwischen 1 und 8 eingeben.');
  }
}

function changeImage() {
  const fortuneTellerImg = document.getElementById('fortune-teller-img');
  const output = document.getElementById('output');

  if (changesRemaining > 0) {
    currentImage = (currentImage % 8) + 1; // Bildnummer von 1 bis 8
    fortuneTellerImg.src = `img/bild${currentImage}.jpg`;

    changesRemaining--;

    setTimeout(() => {
      changeImage();
    }, 1000);
  } else {
    // Alle Bildänderungen sind abgeschlossen, jetzt die zweite Eingabe anzeigen
    const secondInput = prompt('Welche Zahl wählst du?');
    processSecondInput(secondInput, output);
  }
}

function processSecondInput(secondInput, outputElement) {
  if (secondInput >= 1 && secondInput <= 8) {
    const randomSpruchIndex = Math.floor(Math.random() * sprueche.length);
    const selectedSpruch = sprueche[randomSpruchIndex];
    outputElement.innerHTML = `${selectedSpruch}`;
  } else {
    alert('Bitte eine gültige Zahl zwischen 1 und 8 eingeben.');
  }
}
