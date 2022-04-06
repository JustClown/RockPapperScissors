function compare(arr, userChoice, compChoice) {
    const arrHalf = (arr.length-1)/2

    function move() {
        if (arr.indexOf(userChoice)+arrHalf !== arr.length-1){
        let elem = arr.shift()
        arr.push(elem)
        move();
    }}

    move();

    if(arr.indexOf(userChoice)>arr.indexOf(compChoice)){
        console.log('YouWin');
    } else if(arr.indexOf(userChoice)<arr.indexOf(compChoice)) {
        console.log('You Lose')
    } else {
        console.log('Stack');
    }
}

module.exports = compare