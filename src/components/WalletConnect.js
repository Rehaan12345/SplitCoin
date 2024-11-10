import { useConnect } from '@stacks/connect-react';

function WalletConnect() {
  const { doOpenAuth } = useConnect();

  return (
    <button onClick={() => doOpenAuth()}>
      Connect Wallet
    </button>
  );
}

export default WalletConnect;