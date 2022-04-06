const inquirer = require('inquirer')

async function userChoice(arr){
let tempArr = arr.slice()
tempArr.push('help')
tempArr.push('exit')

    const questions = [
        {
        type: 'list',
        name: 'name',
        message: 'Your choice: ',
        choices: tempArr,
    }
]

await inquirer.prompt(questions).then((answers)=> {
    return choice = answers.name;})
    return choice;
}

module.exports = userChoice