function compare(moves, userChoice, compChoice) {
    const movesHalf = (moves.length-1)/2

    function move() {
        if (moves.indexOf(userChoice)+movesHalf !== moves.length-1){
            let elem = moves.shift()
            moves.push(elem)
            move();
        }
    }

    move();

    if(moves.indexOf(userChoice)>moves.indexOf(compChoice)){
        console.log('YouWin');
    } else if(moves.indexOf(userChoice)<moves.indexOf(compChoice)) {
        console.log('You Lose')
    } else {
        console.log('Stack');
    }
}

module.exports = compare