const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'file',
    message:
      'Which functions and files do you want to create? Please seperate by comma.',
  },
]

inquirer.prompt(questions).then(answers => {
  const files = answers['file'].split(',').map(el => el.trim())
  console.log(files)
})
