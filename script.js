let coinSurface = '';
let score = JSON.parse(localStorage.getItem('scoreStorage')) || { win: 0, lose: 0 };

function flipCoin(){
    const randomNumber = Math.random();
    if (randomNumber <= 0.5) {
        coinSurface = 'head';
    } 
        else if (randomNumber > 0.5) {
            coinSurface = 'tail';
        }

}

function check(coin) {
    const pick = coin;

    if (coinSurface === pick){
        document.querySelector('.check').innerHTML = `You picked: ${pick.toUpperCase()}, Coin landed:  ${coinSurface}, YOU WIN!`
        score.win++;
    }
    else if (coinSurface != pick) {
        document.querySelector('.check').innerHTML = `You picked: ${pick.toUpperCase()}, Coin landed:  ${coinSurface}, YOU LOSE!`
        score.lose++;``
    }
    localStorage.setItem('scoreStorage', JSON.stringify(score));
    document.querySelector('.score').innerHTML = `WINS: ${score.win} LOSSES: ${score.lose}`;
}



function resetScore(){
    const choice = confirm('Are you sure you want to reset?');
    if (choice === true)
    score = {
        win: 0,
        lose:0
    }
    document.querySelector('.score').innerHTML = `WINS: ${score.win} LOSSES: ${score.lose}`;
}

