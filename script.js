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

let scoreBoard = document.getElementById("scoreDisplay")
let scoreText = document.createElement("div");
let score = 0;
scoreText.innerHTML = score;
scoreBoard.appendChild(scoreText);

const timeText = document.createElement("div");
    let time = 30;
    timeText.innerHTML = time + "s"
    const timeDisplay = document.getElementById("timeDisplay")
    timeDisplay.appendChild(timeText);



function startGame(){
//hide instructions
const instructions = document.getElementById("gameInstructions")
instructions.style.display = "none";
//Function = Make soot ghost appear randomly on the grid
//on click of soot ghost, score +10;
//addeventlistener on sootghost image, on click, it will change score to score =+ 10;
//change image of randomDiv to handprint when soot ghost image is clicked
const sootGhost = document.createElement("img");
sootGhost.src = "Images/sootGhostIcon.gif";
const handprint = document.createElement("img");
handprint.src = "Images/Handprint2.png";

function randomDivID() {
    let randomDivID = Math.floor(Math.random()*100);
    return randomDivID;
}

function randomSootGhost() {
    let randomDiv = document.getElementById(randomDivID());
    //if randomDiv has a child then replace child, if no children then append child sootGhost
    if (randomDiv.hasChildNodes() == true) {
        console.log("Happened");
        randomDiv.replaceChild(sootGhost, randomDiv.firstChild);
    } else {
        randomDiv.appendChild(sootGhost);
    }
    
}
//Every three seconds randomSootGhost()
let randomSootGhostIntervalID = setInterval(randomSootGhost, 920);
//Add score board


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
    

    function timerUpdate() {
        if (time >= 1) {
            time -= 1;
            timeText.innerHTML = time + "s";
        } else {
            let randomDiv = sootGhost.parentNode;
            randomDiv.removeChild(randomDiv.firstChild);
            clearInterval(timerUpdateIntervalID);
            clearInterval(randomSootGhostIntervalID);
            instructions.style.display = "block";
            time = 30;
            if (score >= 250) {
                alert("GAME OVER\nYou scored " + score + " points!\nWell done!");
            score = 0;
            scoreText.innerHTML = score;
            } else {
                alert("GAME OVER\nYou scored " + score + " points!\nPlay again for a higher score!");
            score = 0;
            scoreText.innerHTML = score;
            }
            


        }

    }

let timerUpdateIntervalID = setInterval(timerUpdate, 1000);
}


timerDisplay();
}
//To make timer stop at 30s, to create popup that says gameover and score. To reset the game when ok is pressed
//if time >= 1 then time -= 1 and display, otherwise clear interval for soot ghost and timerupdate, popup message


//add event listener to press to start button, which initialises the setinterval for the game
const startBtn = document.getElementById("startGame");
startBtn.addEventListener("click",startGame);




