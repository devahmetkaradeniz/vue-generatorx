#!/usr/bin/env node

import { Command } from 'commander';
import component from '../commands/component.js';

const program = new Command()

let componentName = null

program
    .usage('[name]')
    .arguments('[name]')
    .action((name) => {
        componentName = name
    })
    .parse(process.argv)

component(componentName)