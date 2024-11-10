{
    description = "clarinet";

    inputs = {
      nixpkgs.url = "github:nixos/nixpkgs/nixos-21.05";
      utils.url = "github:numtide/flake-utils";
    };

    outputs = { self, nixpkgs, utils }:
      let
      pkgsForSystem = system: import nixpkgs {
          overlays = [ overlay ];
          inherit system ;
      };

      overlay = final: prev: {
          clarinet = prev.callPackage ./clarinet.nix {};

          devShell = final.clarinet;
      };
      in utils.lib.eachSystem [ "x86_64-linux" "aarch64-linux" ] (system: rec {
          legacyPackages = pkgsForSystem system;
          packages = utils.lib.flattenTree {
            inherit (legacyPackages) devShell clarinet;
          };
          defaultPackage = packages.clarinet;
          apps.clarinet = utils.lib.mkApp { drv = packages.clarinet; };
      });
}
