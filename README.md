# Feature
I want to build a game inspired by Mei in Totoro and the soot dust ghosts.

Planning

Writing pseudocode
Initialise HTML, JS and CSS files
Create grid
Find image of Mei's foot/shoe and soot ghost and black foot print
Score div
Function = Make soot ghost appear randomly on the grid
At 3 seconds, soot ghost disappear and repeat function above
Mei will be cursor
When cursor clicks on soot ghost then score increases by 10
Game lasts for 1 minute
When 1 minute finishes then game over and display final score


Trouble shooting
Unsure how to append soot ghost onto div
spoke to a peer
add id to each div assign to div

after adding handprint the soot ghost element appends to the same div
I realised that is because I defined it globally so it doesn't repeat the math random function

need to return div ID to replace the soot ghost with hand print when clicked

After adding button to start game, it starts first game but it does not remove the exisitng soot ghost and game ends early
I noticed needed to remove child of random div
The game also exits immediately and seems to run the if else loop after the first round, I needed to reinitialise time to 30s

I noticed that sometimes when the game runs, the soot sprites may be randomly allocated to the same div the handprint was in and will push the handprint to the left.

I used an if loop to check whether random Div has a child node, if yes then to use replace child, if not then append child