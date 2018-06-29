const computerPlay = function(randomNum) {
    const choices = ['Rock', 'Paper', 'Scissors']
    return choices[randomNum]
  }
  
  function getRandomIntInclusive() {
    min = Math.ceil(0);
    max = Math.floor(2);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }
  
  function getPlayerSelection() {
    return choice
  }
  
  
    function playRound(player, computer) {
      gameOutcome = ''
      
      if(player.toUpperCase() === 'ROCK' && computer.toUpperCase() === 'ROCK') {
        gameOutcome = `${player} vs ${computer}, is a DRAW!`
      } else if(player.toUpperCase() === 'ROCK' && computer.toUpperCase() === 'SCISSORS') {
        gameOutcome = `You win! ${player} beats ${computer}`
      } else if(player.toUpperCase() === 'ROCK' && computer.toUpperCase() === 'PAPER') {
        gameOutcome = `You Lose! ${computer} beats ${player}`
      }
  
      if(player.toUpperCase() === 'PAPER' && computer.toUpperCase() === 'ROCK') {
        gameOutcome = `You win! ${player} beats ${computer}`
      } else if(player.toUpperCase() === 'PAPER' && computer.toUpperCase() === 'SCISSORS') {
        gameOutcome = `You Lose! ${computer} beats ${player}`
      } else if(player.toUpperCase() === 'PAPER' && computer.toUpperCase() === 'PAPER') {
        gameOutcome = `${player} vs ${computer}, is a DRAW!`
      }
  
      if(player.toUpperCase() === 'SCISSORS' && computer.toUpperCase() === 'ROCK') {
        gameOutcome = `You Lose! ${computer} beats ${player}`
      } else if(player.toUpperCase() === 'SCISSORS' && computer.toUpperCase() === 'SCISSORS') {
        gameOutcome = `${player} vs ${computer}, is a DRAW!`
      } else if(player.toUpperCase() === 'SCISSORS' && computer.toUpperCase() === 'PAPER') {
        gameOutcome = `You win! ${player} beats ${computer}`
      }
  
      return gameOutcome
    }
  
  
  const playerSelection = prompt('Rock, Paper, or Scissors???')
  const computerSelection = computerPlay(getRandomIntInclusive())
  console.log(playRound(playerSelection, computerSelection))