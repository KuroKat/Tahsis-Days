let stations = [];

async function loadStations() {
    const response = await fetch("data/stations.json");
    stations = await response.json();
}

function getStation(id) {
    return stations.find(
        station => station.id === id
    );

}