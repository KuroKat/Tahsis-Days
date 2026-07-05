let game = loadGame();

function hasFoundStation(id) {

    return game.stationsFound.includes(id);

}

function awardStation(station) {

    if (hasFoundStation(station.id)) {

        return {
            success: false,
            message: `${station.name} already found!`
        };

    }

    game.score += station.points;

    game.stationsFound.push(station.id);

    saveGame(game);

    return {

        success: true,

        message: `${station.name}

+${station.points} Points`

    };

}

function resetCurrentGame(){

    game={
        score:0,
        stationsFound:[]
    };

    saveGame(game);

}