function loadScore(){

return Number(localStorage.getItem("score")) || 0;

}

function saveScore(score){

localStorage.setItem("score",score);

}

function resetScore(){

localStorage.removeItem("score");

}