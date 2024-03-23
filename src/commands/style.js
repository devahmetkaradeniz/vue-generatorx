import chalk from "chalk";
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, resolve } from 'path';
import { getSettings } from '../settings.js'

export default (name) => {
    if (!name) {
        console.error(chalk.red('No name given'))
        process.exit(1)
    }

    const settings = getSettings()

    // style Path Control
    let stylePath = resolve(settings.path.style)
    if (!existsSync(stylePath)) {
        console.error(chalk.red(`Path not found ${settings.path.style}`))
        process.exit(1)
    }

    let fileName = name

    // Name Path Control
    if (name.includes('/')) {
        const paths = name.split('/')
        for (let i = 0; i < paths.length - 1; i++) {
            const tempPath = join(stylePath, paths[i])
            if (!existsSync(tempPath)) {
                mkdirSync(tempPath)
            }
            stylePath = tempPath
        }
        fileName = paths[paths.length - 1]
    }

    writeFileSync(join(stylePath, `${fileName}.${settings.app.style}`), '', { flag: 'w' })
}