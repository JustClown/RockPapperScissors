const inquirer = require('inquirer');

async function userChoice(arr){
    let options = arr.slice();
    options.push('help');
    options.push('exit');

    const questions = [
        {
        type: 'list',
        name: 'name',
        message: 'Your choice: ',
        choices: options,
    }
]

await inquirer.prompt(questions).then((answers)=> {
    return choice = answers.name;});
    return choice;
}

module.exports = userChoice;