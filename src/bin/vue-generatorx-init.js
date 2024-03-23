#!/usr/bin/env node

import { Command } from 'commander';
import init from '../commands/init.js';

const program = new Command()

program
    .option('-y', 'default settings')
    .parse(process.argv)

init(program.opts().y)