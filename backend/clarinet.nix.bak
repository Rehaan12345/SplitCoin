{ pkgs ? import <nixpkgs> {} }:
  pkgs.rustPlatform.buildRustPackage rec {
    pname = "clarity";
    version = "2.11.2";

    src = pkgs.fetchFromGitHub {
        owner = "hirosystems";
        repo = "clarinet";
        rev = "af78d2d67bf7b31d45f16920264ad3f733672d32";
        hash = "";
    };

    cargoHash = "sha256-OmUryz5MCxHCIMDtGPhTPmNUUOLEM0v49J4rX2UdlYg=";

    nativeBuildInputs = [
      pkgs.openssl
      pkgs.pkg-config
      pkgs.perl
    ];
  
    buildInputs = [
      pkgs.openssl
    ];
  
    cargoBuildOptions = [
      "--release"
    ];
  
    buildPhase = ''
      export OPENSSL_DIR=${pkgs.openssl.dev}
      export PKG_CONFIG_ALLOW_CROSS=1
      cargo install-clarinet
    '';

    installPhase = ''
      mkdir -p $out/bin
      install -t $out/bin clarinet
    '';

    meta = with pkgs.lib; {
      description = "";
      homepage = "https://github.com/hirosystems/clarinet";
      license = licenses.GPL;
      platforms = platforms.linux;
    };
  }
