    let wins = 0;
    let losses = 0;
    let ties = 0;

    function playGame(playerMove){
      const computerMove = getComputerMove();
      let result = '';

      if (playerMove === computerMove){
        // result = `Tie. <br> You '${playerMove}' - '${computerMove}' Computer`;
        ties++;
      }else if(
        (playerMove === 'Rock' && computerMove === 'Scissors') ||
        (playerMove === 'Paper' && computerMove === 'Rock') ||
        (playerMove === 'Scissors' && computerMove === 'Paper')
      ){
        // result = `You win. <br> You '${playerMove}' - '${computerMove}' Computer`;
        wins++;
      }else {
        // result = `You lose. <br> You '${playerMove}' - '${computerMove}' Computer`;
        losses++;
      }
    
    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-score').innerHTML = 
    `You <img src="../images/${playerMove}-emoji.png"
    class="RockPaperScissors-emoji">
    <img src="../images/${computerMove}-emoji.png" class="RockPaperScissors-emoji">
    Computer
    <br>
    <br>
    <br>
    Wins: ${wins}, Losses: ${losses}, Ties: ${ties};`
    }

    function getComputerMove(){
      const randomNumber = Math.random();
      let computerMove = '';

      if (randomNumber>0 && randomNumber<= 1/3){
        return 'Rock';
      }else if(randomNumber >1/3 && randomNumber<=2/3){
        return 'Paper';
      }else if(randomNumber >2/3 && randomNumber<= 3){
        return 'Scissors';
      }
    }

    function resetScore(){
      wins = 0;
      losses = 0;
      ties = 0;
      document.querySelector('.js-result').innerHTML ='';

      document.querySelector('.js-score').innerHTML = 
      `Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`;
    }