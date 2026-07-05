let game = loadGame();

function hasFoundStation(id) {
    return game.stationsFound.includes(id);
}

function addStation(station) {
    if (hasFoundStation(station.id)) {
        return false;
    }

    game.score += station.points;
    game.stationsFound.push(station.id);
    saveGame(game);

    return true;
}