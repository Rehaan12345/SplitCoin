{
    stdenv,
    unzip, 
    glibc,
    openssl,
    autoPatchelfHook
}: let 
    src = ./clarinet-linux-x64.zip;
    in stdenv.mkDerivation {
        inherit src;
        name = "clarinet";
        version = "2.11.2";
        setSourceRoot = "sourceRoot=.";
        nativeBuildInputs = [ unzip glibc autoPatchelfHook ];
        buildInputs = [ openssl  ];
        installPhase = "
          mkdir -p $out/bin;
          install -t $out/bin clarinet;
        ";
} 
