{
  inputs = {
    # nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    systems.url = "github:nix-systems/default";
  };

  outputs =
    { systems, nixpkgs, ... }@inputs:
    let
      eachSystem = f: nixpkgs.lib.genAttrs (import systems) (system: f nixpkgs.legacyPackages.${system});
    in {
      devShells = eachSystem (pkgs: rec {
        default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs
            nodePackages.typescript
            nodePackages.typescript-language-server
          ];
        };
      });
    };
}
