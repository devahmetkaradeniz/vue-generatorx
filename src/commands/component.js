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

    // // Component Path Control
    // let componentPath = resolve(settings.path.component)
    // if (!existsSync(componentPath)) {
    //     console.error(chalk.red('Path not found'))
    //     process.exit(1)
    // }

    // let fileName = name

    // // Name Path Control
    // if (name.includes('/')) {
    //     const paths = name.split('/')
    //     for (let i = 0; i < paths.length - 1; i++) {
    //         const tempPath = join(componentPath, paths[i])
    //         if (!existsSync(tempPath)) {
    //             mkdirSync(tempPath)
    //         }
    //         componentPath = tempPath
    //     }
    //     fileName = paths[paths.length - 1]
    // }

    // let componentStub = readFileSync(join(dirname(fileURLToPath(import.meta.url)), '..', 'stubs', 'component', settings.app.language, `${settings.app.api}.stub`), 'utf-8')

    // componentStub = componentStub.replace(/{{APP_CSS}}/g, settings.app.style)
    
    // writeFileSync(join(componentPath, `${fileName}.vue`), componentStub, { flag: 'w' })
}