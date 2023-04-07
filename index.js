import { Command } from './node_modules/commander/index.js';
const program = new Command();

program
  .name('nix-shelley')
  .description('CLI program to manage shell.nix with ease')
  .version('0.1.0');

program
  .command('init')
  .description('initializes a shell.nix in the working directory')
  .action()