
document.write("hello world");
// 1.	Begin by prompting the user for their choice.
var userChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
// 2.	Create the computer’s choice. This will be generated similarly to the coin flip that you did last week. Remember though, rather than 2 options, there will be 3 here.
var randomNumber = Math.floor(Math.random() * 3); //1 2 or 3
// 3.	Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
var computerChoice;
if (randomNumber === 0) {
    computerChoice = "rock";
} else if (randomNumber === 1) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
// 4.	Create a conditional that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.

// 6.	What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.
if (userChoice != "paper" && userChoice != "rock" && userChoice != "scissors") {
    alert("Invalid input must be either Rock, Paper, or Scissors. Check spelling");
}

    console.log("You chose " + userChoice);
    console.log("Computer chose " + computerChoice);

// 5.	What if the result ends in a tie? Figure out how to handle that as well.
    if (userChoice == computerChoice) {
        alert("It's a tie");
    }
    //see who wins
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        alert("You win " +  userChoice + " beats " + computerChoice + ".");
    } else {
        alert("You lost " + computerChoice + " beats " + userChoice + ".");
    }
