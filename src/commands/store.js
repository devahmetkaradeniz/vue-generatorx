import chalk from "chalk";
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { getSettings } from '../settings.js'
import { capitalize } from '../utils.js'

export default (name) => {
    if (!name) {
        console.error(chalk.red('No name given'))
        process.exit(1)
    }

    const settings = getSettings()

    // store Path Control
    let storePath = resolve(settings.path.store)
    if (!existsSync(storePath)) {
        console.error(chalk.red(`Path not found ${settings.path.store}`))
        process.exit(1)
    }

    let fileName = name

    // Name Path Control
    if (name.includes('/')) {
        const paths = name.split('/')
        for (let i = 0; i < paths.length - 1; i++) {
            const tempPath = join(storePath, paths[i])
            if (!existsSync(tempPath)) {
                mkdirSync(tempPath)
            }
            storePath = tempPath
        }
        fileName = paths[paths.length - 1]
    }

    let storeStub = readFileSync(join(dirname(fileURLToPath(import.meta.url)), '..', 'stubs', 'store', settings.app.language, settings.app.api, `${settings.app.store}.stub`), 'utf-8')

    storeStub = storeStub.replace(/{{UPPERCASE_NAME}}/g, capitalize(fileName))
    storeStub = storeStub.replace(/{{NAME}}/g, fileName)

    const extension = settings.app.language === 'javascript' ? 'js' : 'ts'

    writeFileSync(join(storePath, `${fileName}.${extension}`), storeStub, { flag: 'w' })
}