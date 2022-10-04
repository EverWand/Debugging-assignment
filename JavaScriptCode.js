// Enhance each function and put comments 
// above each line of code explaining what is happening in your own words.

//Function: welcomes the user to the page.
function displayWelcome() {
    //writes a message that diplays on the webpage that welcomes the user
    document.write("<h2>Scroll down to land at the space port and enter the Casino!</h2>");
}

//Function: gives user instruction on what the webpage is supposed to work.
function displayInstructions() {
    // writes a message that display the instruction of the game onto the webpage
    document.write("<br/><p>This is how you play....<br/>Refresh the page to roll the antigravity dice!</p><br/><p><p>You can't win if you don't play!</p><br/>");
}

//Function: Gameplay script; Roll 2 6-sided dice and calculates the sum; Displays win/loss/tie message based on results
function play() {
    //creates variable for a dice; generates a random number up to 6
    var die1 = Math.ceil(Math.random() * 6);

    // var die2 = Math.ceil(Math.random() * 12); <---logic is wrong. should go up to 6, not 12.
    //fixed code: makes sure the dice can only go up to 6
    //creates variable for a dice; generates a random number up to 6
    var die2 = Math.ceil(Math.random() * 6);

    //creates a variable that adds the two die results
    var sum = die1 + die2;

    //displays a label and result for the first die
    document.write("Die 1 = " + die1);
    //adds a line break for the webpage
    document.write("<br/>");
    //displays a label and result for the second die
    document.write("Die 2 = " + die2);
    //adds a line break for the webpage
    document.write("<br/>");
    //displays a label and result for the sum of the 2 dice
    document.write("Sum = " + sum);
    //adds a line break for the webpage
    document.write("<br/>");

    //if (sum == 8 || sum == 11) { <--- logic is wrong. should be that youlose if you get a result of 7 or 11, not 8 or 11.
    //fixed code: makes sure the if statement activates when the result is 7 or 11.
    //If statement that tests wether or not the sum variable is equal to 7 or 11
    if (sum == 7 || sum == 11){
        //if so: 
        //display a message telling the user they lost.
        document.write("You lose Space Cadet!");
        //adds a line break for the webpage
        document.write("<br/>");
    }
    //if not, test if the te two dice variables equal eachother and the remainder of them divided is 0 
    else if (die1 == die2 && die1 % 2 == 0) {
        //if so:
        //display a message telling the user that they won.
        document.write("DOUBLES - you win Space Ranger!");
        //add a line break to the webpage
        document.write("<br/>");
    }
    //if not, go to this default output:
    else {
        //display a message that the didn't win or lose and that they should roll again
        document.write("Roll again Space Cadet!");
        //adds a line break to the webpage
        document.write("<br/>");
    }
}
