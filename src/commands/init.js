import { setSettings } from '../settings.js'
import { getQuestions } from '../questions.js'
import inquirer from 'inquirer'

export default (isInitial = false) => {
  if (isInitial) {
    setSettings()
  } else {
    inquirer.prompt(getQuestions()).then((answers) => {
      setSettings(answers)
    }).catch((e) => {
    })
  }
}