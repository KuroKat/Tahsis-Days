let stations = [];

async function loadStations(){

    const response = await fetch("data/stations.json");

    stations = await response.json();

}

function getRandomStation(){

    return stations[
        Math.floor(Math.random()*stations.length)
    ];

}