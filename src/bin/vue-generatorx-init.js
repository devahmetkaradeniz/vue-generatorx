#!/usr/bin/env node

import { Command } from 'commander';
import init from '../commands/init.js';

const program = new Command()

program.parse(process.argv)

init()