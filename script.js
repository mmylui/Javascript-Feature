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
//on click of soot ghost, score +10;
//addeventlistener on sootghost image, on click, it will change score to score =+ 10;
//change image of randomDiv to handprint when soot ghost image is clicked
const sootGhost = document.createElement("img");
sootGhost.src = "Images/sootGhostIcon.gif";
const handprint = document.createElement("img");
handprint.src = "Images/handprint2.png";

function randomDivID() {
    let randomDivID = Math.floor(Math.random()*100);
    return randomDivID;
}

function randomSootGhost() {
    console.log(randomDivID());
    let randomDiv = document.getElementById(randomDivID());
    randomDiv.appendChild(sootGhost);
}
//Every three seconds randomSootGhost()
    setInterval(randomSootGhost, 3000);
//Add score board
let scoreBoard = document.getElementById("scoreDisplay")
let scoreText = document.createElement("div");
let score = 0;
scoreText.innerHTML = score;
scoreBoard.appendChild(scoreText);

function addScore () {
console.log("click detected");
score += 10;
scoreText.innerHTML = score;
let randomDiv = sootGhost.parentNode;
randomDiv.replaceChild(handprint,randomDiv.firstChild);
setTimeout(removeHandprint,500);
}
sootGhost.addEventListener("click", addScore);

function removeHandprint () {
let randomDiv = handprint.parentNode;
randomDiv.removeChild(randomDiv.firstChild);
}

//set timer 30s, setInterval updating every second, timer starting at 30s, reducing by one at each second interval, when timer = 0, game over, popup score = score
function timerDisplay() {
    const timeText = document.createElement("div");
    let time = 30;
    timeText.innerHTML = time + "s"
    const timeDisplay = document.getElementById("timeDisplay")
    timeDisplay.appendChild(timeText);

    function timerUpdate() {
        time -= 1;
        timeText.innerHTML = time + "s";
    }

    setInterval(timerUpdate, 1000);
}


timerDisplay();






