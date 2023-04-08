import { Command } from 'commander';
const program = new Command();

program
  .name('nix-shelley')
  .description('CLI program to manage shell.nix with ease')
  .version('0.1.0');

program
  .command('init')
  .description('initializes a shell.nix in the working directory')
  .action()

program
  .command('query')
  .description('queries versioned revisions')
  .action()

program
  .command('add')
  .description('add dependency to shell.nix')
  .action()

program
  .command('search')
  .description('searches for packages in the revision specified in shell.nix')
  .action()