#!/usr/bin/env node

import { Command } from 'commander';
import style from '../commands/style.js';

const program = new Command()

let styleName = null

program
    .usage('[name]')
    .arguments('[name]')
    .action((name) => {
        styleName = name
    })
    .parse(process.argv)

style(styleName)