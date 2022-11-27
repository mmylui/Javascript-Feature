# FAC Project 6 - Javascript Feature

### Introduction
I wanted to build a game which is inspired by Mei in Totoro and the soot sprites.

### Planning
I wrote the following pseudocode to help me break down what I need to do in order to build the game in smaller steps:

1. Initialise HTML, JS and CSS files
2. Create a grid
3. Find images of hand, handprint and soot sprite to use in the game
4. Make soot sprites randomly appear on the grid
5. Make soot sprites disappear after a set number of time and repeat step 4
6. Change cursor to hand
7. When cursor clicks on soot sprite then score increases by 10 points
8. Add score display which updates as the game continues
9. Game will last for 30 seconds
10. Popup message after timer ends to say game over and display final score


### Building
I tried to follow the steps above as best possible, but inevitably I have run into bugs which I was unable to solve at that moment. I therefore move on to the next steps which I am able to do and came back to the bugs when I have had time to think about how to break it down.

### Debugging
* Appending soot sprites onto my grid randomly*
I was having issues figuring out how to append my soot sprite image randomly onto the grid and I attended a FAC meetup. I spoke to a fellow applicant who suggested if I can assign numbers as IDs for the individual grid divs I may be able to append it randomly.

* Soot sprite element appends on to the same div as my handprint*
I realised that I have defined the soot ghost element globally so it does not repeat the math random function again. In the end I have figured to use a function to determine the random div ID so it repeats the function every time.

* After adding button to start game, it starts first game but on subsequent games it does not remove the exisitng soot sprites and game ends immediately.*
I noticed that I needed to remove child of random div at the end of the game. I also needed to reinitialise time to 30s.

* I noticed that sometimes when the game runs, the soot sprites may be randomly allocated to the same div the handprint was in and will push the handprint to the left.*
I used an if loop to check whether random Div has a child node, if yes then to use replace child, if not then append child
