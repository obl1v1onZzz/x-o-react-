const symbolsByTurn = {
    "X move": "X",
    "O move": "O"
};
export let currentPlayer = Object.keys(symbolsByTurn)[1]

export const alternateTurn = () => {
    const players = Object.keys(symbolsByTurn);
    const playerIndex = players.indexOf(currentPlayer);
    if (playerIndex >= players.length - 1) return (currentPlayer = players[0]);
    return (currentPlayer = players[playerIndex + 1]);
}