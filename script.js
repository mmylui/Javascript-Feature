console.log("JavaScript is Working!");
const gameBoard = document.getElementById("gameBoard");

//create gameBoard
function createGameBoard () {
    for (let i = 0; i < 100; i ++) {
        let div = document.createElement("div");
        div.setAttribute("id",i);
        gameBoard.appendChild(div);
        console.log(div);

    }
}

createGameBoard();

//Function = Make soot ghost appear randomly on the grid
    const sootGhost = document.createElement("img");
    sootGhost.src = "Images/sootGhostIcon.gif";
function randomSootGhost() {
    let randomDiv = document.getElementById(Math.floor(Math.random()*100));
    randomDiv.appendChild(sootGhost);
}
    setInterval(randomSootGhost, 3000);
