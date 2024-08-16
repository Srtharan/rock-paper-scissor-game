let result = null;
let Tie = 0, user = 0, computer = 0;

function func(userSelects) {
    let randomNum = Math.floor(Math.random() * 11);
    let computerSelects = '';
    if (randomNum <= 3 && randomNum > 0) {
        computerSelects = 'rock'
    }
    else if (randomNum > 3 && randomNum <= 6) {
        computerSelects = 'paper'
    }
    else {
        computerSelects = 'scissor'
    }
    // prompt("func")
    if (userSelects == computerSelects) {
        result = 'Tie'
        Tie++;
        // alert(`${result}`)

    } else if (
        (userSelects == 'rock' && computerSelects == 'paper') ||
        (userSelects == 'paper' && computerSelects == 'scissor') ||
        (userSelects == 'scissor' && computerSelects == 'rock')) {
        result = 'Computer Wins'
        computer++;
        // alert(`${result}`)
    }
    else {
        result = 'User Wins'
        user++;
    }
    document.getElementById('show-result').innerHTML = computerSelects;
    document.getElementById('user-score').innerHTML = user;
    document.getElementById('computer-score').innerHTML = computer;
    document.getElementById('tie-score').innerHTML = Tie;
}

function viewScore() {
    let savepointResult = '';
    if (user > computer) {
        savepointResult = 'User Wins!';
        alert(`${savepointResult}`);
    }
    else if (user == computer) {
        savepointResult = 'Tie Game!';
        alert(`${savepointResult}`);
    }
    else {
        savepointResult = 'Computer Wins!';
        alert(`${savepointResult}`);
    }
    document.getElementById('savepoint-text').innerHTML = savepointResult;
    // alert(`User:${user} Computer:${computer}`)
}
function reset() {
    user = computer = Tie = 0;
    document.getElementById('user-score').innerHTML = user;
    document.getElementById('computer-score').innerHTML = computer;
    document.getElementById('tie-score').innerHTML = Tie;
}