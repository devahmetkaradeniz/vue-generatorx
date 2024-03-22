import { settings } from './settings.js';

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
        defaultValue: settings.path.view
    },
    {
        type: 'input',
        name: 'path.store',
        message: 'Store path ?',
        defaultValue: settings.path.store
    },
    {
        type: 'input',
        name: 'path.component',
        message: 'Component path?',
        defaultValue: settings.path.component
    },
    {
        type: 'input',
        name: 'path.style',
        message: 'Style path ?',
        defaultValue: settings.path.style
    }
]

export const getQuestions = () => {
    return questions
}