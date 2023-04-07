{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/nixos-22.11.tar.gz") {} }:

pkgs.mkShell {
  buildInputs = [
   pkgs.deno
   pkgs.yarn
  ];
}