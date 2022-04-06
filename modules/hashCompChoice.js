const {createHmac} = require('crypto');

function hashCompChoice(compChoice,secret){
    console.log(`HMAC: ${createHmac('sha256',secret).update(compChoice).digest('hex')}`)
}

module.exports = hashCompChoice