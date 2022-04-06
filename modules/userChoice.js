const inquirer = require('inquirer')

async function userChoice(arr){
    const questions = [
        {
        type: 'list',
        name: 'name',
        message: 'Your choice: ',
        choices: arr,
    }
]

await inquirer.prompt(questions).then((answers)=> {
    return a = answers.name;        
    })
    return a;
}

module.exports = userChoice