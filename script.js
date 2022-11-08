console.log("JavaScript is Working!");
const gameBoard = document.getElementById("gameBoard");

//create gameBoard
function createGameBoard () {
    for (let i = 0; i < 100; i ++) {
        let div = document.createElement("div");
        gameBoard.appendChild(div);
        console.log(div);
    }
}

createGameBoard();


