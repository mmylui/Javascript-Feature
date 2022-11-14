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
    const handprint = document.createElement("img");
handprint.src = "Images/handprint2.png";


function startGame() {
    let randomDiv = document.getElementById(Math.floor(Math.random()*100));
    randomDiv.appendChild(sootGhost);
    
    function removeHandprint () {
        randomDiv.removeChild(randomDiv.children[0]);
    }
    function addScore () {
        console.log("click detected");
        score += 10;
        scoreText.innerHTML = score;
        randomDiv.replaceChild(handprint,randomDiv.firstChild);
        setTimeout(removeHandprint,500);
    }
    sootGhost.addEventListener("click", addScore);

}
    setInterval(startGame, 3000);

//Add score board
let scoreBoard = document.getElementById("scoreDisplay")
let scoreText = document.createElement("div");
let score = 0;
scoreText.innerHTML = score;
scoreBoard.appendChild(scoreText);

//on click of soot ghost, score +10;
//addeventlistener on sootghost image, on click, it will change score to score =+ 10;
//change image of randomDiv to handprint when soot ghost image is clicked








