const STORAGE_KEY = "ranger-hunt-save";

function loadGame() {
    const save = localStorage.getItem(STORAGE_KEY);
    if (!save) {
        return {
            score: 0,
            stationsFound: []
        };
    }
    return JSON.parse(save);

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