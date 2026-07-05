const scoreElement = document.getElementById("score");
const message = document.getElementById("message");

document
.getElementById("scanButton")
.addEventListener("click", scanStation);

document
.getElementById("resetButton")
.addEventListener("click", reset);

async function start(){

    await loadStations();

    updateDisplay();

}

function updateDisplay(){

    scoreElement.innerText = game.score;

}

function scanStation(){

    const station = getRandomStation();

    const result = awardStation(station);

    updateDisplay();

    message.innerText = result.message;

}

function reset(){

    resetCurrentGame();

    updateDisplay();

    message.innerText="Game Reset";

}

start();