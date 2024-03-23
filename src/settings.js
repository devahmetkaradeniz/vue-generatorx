import { writeFileSync, readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname, resolve } from 'path';
import chalk from 'chalk';

const settingsFile = 'vgx.config.json'

const settings = {
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
    if (existsSync(resolve(settingsFile))) {
        try {
            const jsonFile = readFileSync(resolve(settingsFile), { encoding: 'utf-8' })
            return JSON.parse(jsonFile)
        } catch (e) {
            console.error(chalk.red(`Error parsing local ${settingsFile} file.`))
            process.exit(1)
        }
    }
    return settings
}

export const setSettings = (userSettings) => {
    userSettings = userSettings || settings

    let configStub = readFileSync(join(dirname(fileURLToPath(import.meta.url)), 'stubs', 'config.stub'), 'utf-8')

    configStub = configStub.replace(/{{APP_API}}/g, userSettings.app.api)
    configStub = configStub.replace(/{{APP_LANGUAGE}}/g, userSettings.app.language)
    configStub = configStub.replace(/{{APP_STORE}}/g, userSettings.app.store)
    configStub = configStub.replace(/{{APP_STYLE}}/g, userSettings.app.style)
    configStub = configStub.replace(/{{PATH_VIEW}}/g, userSettings.path.view)
    configStub = configStub.replace(/{{PATH_STORE}}/g, userSettings.path.store)
    configStub = configStub.replace(/{{PATH_COMPONENT}}/g, userSettings.path.component)
    configStub = configStub.replace(/{{PATH_STYLE}}/g, userSettings.path.style)

    writeFileSync(resolve(settingsFile), configStub, { flag: 'w' })
}