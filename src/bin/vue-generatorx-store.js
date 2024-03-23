#!/usr/bin/env node

import { Command } from 'commander';
import store from '../commands/store.js';

const program = new Command()

let storeName = null

program
    .usage('[name]')
    .arguments('[name]')
    .action((name) => {
        storeName = name
    })
    .parse(process.argv)

store(storeName)