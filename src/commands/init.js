import { logSettings, setSettings } from '../settings.js'
import { getQuestions } from '../questions.js'
import inquirer from 'inquirer'

export default () => {
    inquirer.prompt(getQuestions()).then((answers) => {
        setSettings(answers)
        logSettings(answers)
    }).catch((e) => {

    })
}