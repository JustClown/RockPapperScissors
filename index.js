const compare = require('./modules/compare')
const checkParams = require('./modules/chechParams')
const userChoice = require('./modules/userChoice')
const compChoice = require('./modules/compChoice')
const hashKeyGen = require('./modules/hashKeyGen')
const hashCompChoice = require('./modules/hashCompChoice')

const moves = process.argv.slice(2)
movesQty = moves.length

async function main() {
    if (checkParams(moves) === 0) {
        iiChoice = moves[compChoice(moves)]
        let hashKey = hashKeyGen(32)
        hashCompChoice(iiChoice,hashKey)
        await userChoice(moves).then(value => {
            return myChoice = value;
        })
        
        
        if(myChoice!=='help'&& myChoice!=='exit'){
            compare(moves, myChoice, iiChoice)
            console.log(`Computer Move: ${iiChoice}`);
            console.log(`HMAC KEY: ${hashKey}\n\nNew Game:`);
        } else if(myChoice === 'exit'){
            process.exit()
        }
    }
    main()
}
main()