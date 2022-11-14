console.log("JavaScript is Working!");
const gameBoard = document.getElementById("gameBoard");

//create gameBoard
function createGameBoard () {
    for (let i = 1; i < 101; i ++) {
        let div = document.createElement("div");
        div.setAttribute("id",i);
        div.innerHTML=i;
        gameBoard.appendChild(div);
        console.log(div);

    }
}

createGameBoard();

//Function = Make soot ghost appear randomly on the grid
let squares = document.querySelector(".gameBoard div");
function randomSootGhost(squares) {
    const sootGhost = document.createElement("img");
    sootGhost.src = "Images/sootGhostIcon.gif";
    gameBoard.appendChild(sootGhost);

}

randomSootGhost(squares);
