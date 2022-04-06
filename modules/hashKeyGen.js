const {randomBytes} = require('crypto');

function hashKeyGen(bytes) {
    let buf = randomBytes(bytes).toString('hex')
    return buf
}

module.exports = hashKeyGen