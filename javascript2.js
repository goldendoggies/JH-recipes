console.log("START JS2");

    
    
function playgame() {
    console.log("START GAME JS2");
    alert("LETS PLAY ROCK PAPER SCISSORS!");



    



    console.log("END GAME JS2");
  }

  function computerPlay() {
    const weapons = ['R', 'P', 'S'];
    const computerSelection = weapons[Math.floor(Math.random() * weapons.length)];



    if (computerSelection === 'R') {
      } else if (computerSelection === 'P') {
      } else if (computerSelection === 'S') {
      }
      return computerSelection;
    }



    function countLives(playerSelection, computerSelection) {
      
        switch (true) {
          case (playerSelection === computerSelection):
            break;
          case (playerSelection === 'wand' && computerSelection === 'mace'):
          case (playerSelection === 'bow' && computerSelection === 'wand'):
          case (playerSelection === 'mace' && computerSelection === 'bow'):
            computerLives -= 1;
            break;
          default:
            playerLives -= 1;
            break;
        }


    function resetGame() {
        buttonPlayAgain.addEventListener('click', () => {
            window.location.reload();
        });
        }
          


console.log("END JS2");