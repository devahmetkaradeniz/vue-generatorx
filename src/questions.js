import { getSettings } from './settings.js';
import { pathValidation } from './validation.js'

const settings = getSettings()

const questions = [
    {
        type: 'list',
        name: 'app.api',
        message: 'Do you use Options API or Composition API?',
        choices: ['options', 'composition']
    },
    {
        type: 'list',
        name: 'app.language',
        message: 'Do you use JavaScript or TypeScript?',
        choices: ['javascript', 'typescript']
    },
    {
        type: 'list',
        name: 'app.store',
        message: 'Do you use Pinia or Vuex?',
        choices: ['vuex', 'pinia']
    },
    {
        type: 'list',
        name: 'app.style',
        message: 'Do you use Css or Scss?',
        choices: ['css', 'scss']
    },
    {
        type: 'input',
        name: 'path.view',
        message: 'View path ?',
        default: settings.path.view,
        validate: pathValidation
    },
    {
        type: 'input',
        name: 'path.store',
        message: 'Store path ?',
        default: settings.path.store,
        validate: pathValidation
    },
    {
        type: 'input',
        name: 'path.component',
        message: 'Component path?',
        default: settings.path.component,
        validate: pathValidation
    },
    {
        type: 'input',
        name: 'path.style',
        message: 'Style path ?',
        default: settings.path.style,
        validate: pathValidation
    }
]

export const getQuestions = () => {
    return questions
}