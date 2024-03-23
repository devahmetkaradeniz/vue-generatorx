import chalk from "chalk";
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { getSettings } from '../settings.js'

export default (name) => {
    if (!name) {
        console.error(chalk.red('No name given'))
        process.exit(1)
    }

    const settings = getSettings()

    // View Path Control
    let viewPath = resolve(settings.path.view)
    if (!existsSync(viewPath)) {
        console.error(chalk.red(`Path not found ${settings.path.view}`))
        process.exit(1)
    }

    let fileName = name

    // Name Path Control
    if (name.includes('/')) {
        const paths = name.split('/')
        for (let i = 0; i < paths.length - 1; i++) {
            const tempPath = join(viewPath, paths[i])
            if (!existsSync(tempPath)) {
                mkdirSync(tempPath)
            }
            viewPath = tempPath
        }
        fileName = paths[paths.length - 1]
    }

    let viewStub = readFileSync(join(dirname(fileURLToPath(import.meta.url)), '..', 'stubs', 'view', settings.app.language, `${settings.app.api}.stub`), 'utf-8')

    viewStub = viewStub.replace(/{{APP_CSS}}/g, settings.app.style)

    writeFileSync(join(viewPath, `${fileName}.vue`), viewStub, { flag: 'w' })
}