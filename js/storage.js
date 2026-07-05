const STORAGE_KEY = "ranger-hunt";

function loadGame() {

    const save = localStorage.getItem(STORAGE_KEY);

    if (save) {
        return JSON.parse(save);
    }

    return {
        score: 0,
        stationsFound: []
    };
}

function saveGame(game) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(game)
    );
}

function resetGame() {

    localStorage.removeItem(STORAGE_KEY);

}