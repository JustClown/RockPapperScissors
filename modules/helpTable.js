const Table = require('cli-table3');

function helpTable(moves) {
    choice = moves.slice()
    choice.unshift('USER|PC')

    let tableLength = (choice.length - 2) / 2
    
    let tableCells = ['stack']

    for (i = 0; i < tableLength; i++) {
        tableCells.push('Lose')
    }

    for (i = 0; i < tableLength; i++) {
        tableCells.push('Win')
    }

    const table = {}

    table[choice[0]] = choice.slice(1)

    for (i = 1; i < choice.length; i++) {
        table[choice[i]] = []

        for (let key of tableCells) {
            table[choice[i]].push(key)
        }

        let elem = tableCells.pop()
        tableCells.unshift(elem)
    }
    console.table(table);
}

module.exports = helpTable