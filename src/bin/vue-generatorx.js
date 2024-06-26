#!/usr/bin/env node

import { Command } from 'commander';
import { readFileSync } from 'fs';
import chalk from 'chalk';

const program = new Command()

const packageJson = JSON.parse(readFileSync(new URL('../../package.json', import.meta.url)))

console.log(chalk.blue(packageJson.name))

program
  .description(packageJson.description)
  .version(packageJson.version)
  .usage('<command> [options]')
  .command('init', 'Create a local settings file (vgx.config.json)')
  .command('component', 'Create a component')
  .command('view', 'Create a view')
  .command('store', 'Create a store')
  .command('style', 'Create a style')
  .parse(process.argv)