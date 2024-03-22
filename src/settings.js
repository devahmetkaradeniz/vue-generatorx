import { writeFileSync, readFileSync, existsSync, unlinkSync } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname, resolve } from 'path';

const file = 'vgx.config'

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
    return settings
}

export const deleteSettings = (path) => {
    const filePath = resolve(path)
    if (existsSync(filePath)) {
        unlinkSync(filePath)
    }
}

export const setSettings = (userSettings) => {
    let configStub = readFileSync(join(dirname(fileURLToPath(import.meta.url)), 'stubs', 'config.stub'), 'utf-8')

    configStub = configStub.replace(/{{APP_API}}/g, userSettings.app.api)
    configStub = configStub.replace(/{{APP_LANGUAGE}}/g, userSettings.app.language)
    configStub = configStub.replace(/{{APP_STORE}}/g, userSettings.app.store)
    configStub = configStub.replace(/{{APP_STYLE}}/g, userSettings.app.style)
    configStub = configStub.replace(/{{PATH_VIEW}}/g, userSettings.path.view)
    configStub = configStub.replace(/{{PATH_STORE}}/g, userSettings.path.store)
    configStub = configStub.replace(/{{PATH_COMPONENT}}/g, userSettings.path.component)
    configStub = configStub.replace(/{{PATH_STYLE}}/g, userSettings.path.style)

    const extension = userSettings.app.language === 'typescript' ? 'ts' : 'js'

    deleteSettings(`${file}.${extension === 'ts' ? 'js' : 'ts'}`)

    writeFileSync(resolve(`${file}.${extension}`), configStub, { flag: 'w' })
}