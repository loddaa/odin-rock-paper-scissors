const CHOICES = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * CHOICES.length)
    return CHOICES[randomIndex]
}

function getUserChoice() {
    let choice;
    // Check if choice is NaN, or different from 1,2 or 3
    while (!choice || choice > 3 || choice < 1) {
        choice = prompt('Choose 1 for rock, 2 for paper, 3 for scissors')

        if (choice == null) return 'stopPlaying'
    
        choice = parseInt(choice)
        if (!choice || choice > 3 || choice < 1) console.log('Wrong input')
    }

    choice = CHOICES[choice-1] // The -1 is there to select the correct index
    return choice
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log(`It's a tie - User choice : ${playerSelection} - Computer choice : ${computerSelection}`)
        return "Tie"
    } else if (computerSelection == 'Rock' && playerSelection == "Scissors") {
        console.log('You lost. Rock beats scissors')
        return "Loss"
    } else if (computerSelection == "Paper" && playerSelection == "Rock") {
        console.log('You lost. Paper beats rock')
        return "Loss"
    } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
        console.log('You lost. Scissors beat rock')
        return "Loss"
    } else {
        console.log(`You won. ${playerSelection} beats ${computerSelection}`)
        return "Win"
    }

}

function game() {
    let round = 0
    let userScore = 0;
    let computerScore = 0;
    do {
        let playerSelection = getUserChoice()
        if (playerSelection == 'stopPlaying') break; // Stop game if user hits the button cancel
        let computerSelection = getComputerChoice()

        console.log(`Round : ${round + 1}`) // Increase round of 1 to display 1 at the first round and not 0
        
        let result = playRound(playerSelection, computerSelection)
        
        result != "Tie" ? round++ : '' // Increase round by 1 to reach 5 if result != tie
        
        // Increase scores
        if (result == 'Win') {
            userScore++
        } else if (result == 'Loss') {
            computerScore++
        }

        let playAgain;
        if (round == 5) {
            // Display final result
            userScore > computerScore ? console.log(`You won! Your score : ${userScore} - Computer score ${computerScore}`) : console.log(`You lost! Computer score ${computerScore} - Your score ${userScore}`)
            // Ask user if he wants to play again
            playAgain = confirm('Play again ?')
        }
        
        if (playAgain) {
            console.clear()
            // Reset round , userScore and computerScore to start a new game
            round = 0
            userScore = 0
            computerScore = 0
        } 

    } while (round != 5);

    // Display message when user quit game
    console.log('Thanks for playing')
}

game()