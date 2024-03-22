import chalk from 'chalk';
import userSettings from 'user-settings';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const file = 'vgx.config.json'

// const userSettings = userSettings.file(file)

export const settings = {
    app: {
        api: 'options',
        language: 'javascript',
        store: 'vuex',
        style: 'css',
    },
    path: {
        view: './src/views',
        store: './src/stores',
        component: './src/components',
        style: './src/assets/styles'
    }
}

export const getSettings = () => {
    return settings
}

export const setSettings = (userSettings) => {
    writeFileSync(resolve(file), JSON.stringify(userSettings, null, 2))
}

export const logSettings = (settings) => {
    Object.keys(settings).forEach((key) => {
        console.log(`${chalk.bold(key)}: '${settings[key]}'`)
    })
}
