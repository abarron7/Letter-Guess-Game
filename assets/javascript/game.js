var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guesses = 10;
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoice);
document.onkeyup = function (event) {
    var userGuess = event.key;
    if (userGuess === computerChoice) {
        wins++;
    } else {
        guesses--;
        guessed.push(userGuess);
    }

    if (guesses === 0) {
        losses++;
    }
    if (guesses <0){
        resetGame();
    }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('left').innerHTML = "Guesses left: " + guesses;
    var letterGuessed = document.getElementById("guesses");
    letterGuessed.innerHTML = guessed.join(',');

}

function resetGame() {
    guesses = 10;
    guessed = [];
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("Your Guesses so far: " + guessed);
  }

resetGame();