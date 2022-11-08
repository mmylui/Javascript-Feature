console.log("JavaScript is Working!");
const gameBoard = document.getElementById("gameBoard");

function createGrid () {
    for (let i = 0; i < 100; i ++) {
        let div = document.createElement("div");
        gameBoard.appendChild(div);
        console.log(div);
    }
}

createGrid();


