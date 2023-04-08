import { exec } from 'child_process';

export function checkNix() {
  exec('nix-shell', (error) => {
   if (error) {
      return error;
    }
  }); 
}