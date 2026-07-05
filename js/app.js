let score=loadScore();

document.getElementById("score").innerText=score;

const message=document.getElementById("message");

document
.getElementById("scanButton")
.addEventListener("click",simulateScan);

document
.getElementById("resetButton")
.addEventListener("click",reset);

function simulateScan(){

const ids=Object.keys(stations);

const random=ids[Math.floor(Math.random()*ids.length)];

awardPoints(random);

}

function awardPoints(id){

score+=stations[id];

saveScore(score);

document.getElementById("score").innerText=score;

message.innerText=
`${id} found!

+${stations[id]} points`;

}

function reset(){

score=0;

resetScore();

document.getElementById("score").innerText=0;

message.innerText="Score Reset";

}