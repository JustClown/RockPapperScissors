function checkParams(moves) {
    let j=0;
    if (moves.length < 3) {
        console.log('Error!\nNeed 3 or more parameters!')
        j++;
    }

    if (moves.length % 2 === 0) {
        console.log('Error!\nNeeds an odd number')
        j++
    }

    let i = 0;

    moves.forEach((elem) => {
        if (moves.includes(elem, moves.indexOf(elem) + 1) && i === 0) {
            console.log('Error\nThere are repetitions of parameters');
            j++
            return i++
        }
    })
    return j;
}

module.exports = checkParams