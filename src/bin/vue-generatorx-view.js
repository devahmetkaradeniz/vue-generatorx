#!/usr/bin/env node

import { Command } from 'commander';
import view from '../commands/view.js';

const program = new Command()

let viewName = null

program
    .usage('[name]')
    .arguments('[name]')
    .action((name) => {
        viewName = name
    })
    .parse(process.argv)

view(viewName)