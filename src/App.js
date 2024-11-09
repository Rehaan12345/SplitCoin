import React, { useState } from 'react';
import { Connect } from '@stacks/connect-react';
import { STACKS_TESTNET } from '@stacks/network';

import WalletConnect from './components/WalletConnect';
import ProductList from './components/ProductList';

import './App.css';

function App() {
  const [userSession, setUserSession] = useState(null);

  const appConfig = {
    appName: 'Bitcoin Klarna-like App',
    appIconUrl: '/logo192.png',
    network: STACKS_TESTNET,
  };

  return (
    <Connect
      authOptions={{
        appDetails: {
          name: appConfig.appName,
          icon: appConfig.appIconUrl,
        },
        redirectTo: '/',
        onFinish: (session) => setUserSession(session),
        userSession: userSession,
      }}
    >
      <div className="App">
        <h1>Splitcoin</h1>
        {!userSession ? (
          <WalletConnect />
        ) : (
          <ProductList />
        )}
      </div>
    </Connect>
  );
}

export default App;