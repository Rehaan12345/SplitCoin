import React, { useState, useEffect } from 'react';
import { Connect } from '@stacks/connect-react';
import { AppConfig, UserSession } from '@stacks/connect';
import { StacksMainnet, StacksTestnet } from '@stacks/transactions';

import WalletConnect from './components/WalletConnect';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [userSession, setUserSession] = useState(null);
  const [stacksAddress, setStacksAddress] = useState(null);
  const [bitcoinBalance, setBitcoinBalance] = useState(null);

  useEffect(() => {
    const appConfig = new AppConfig(['store_write', 'publish_data']);
    const session = new UserSession({ appConfig });
    setUserSession(session);

    if (session.isUserSignedIn()) {
      getUserInfo(session);
    }
  }, []);

  const getUserInfo = async (session) => {
    if (!session.isUserSignedIn()) return;

    const userData = session.loadUserData();
    console.log("User Data:", userData);

    const address = userData.profile.stxAddress.mainnet; // Changed to testnet
    
    if (!address) {
      console.error('No Stacks address found');
      return;
    }

    setStacksAddress(address);
    console.log("Stacks Address:", address);

    try {
      const balance = await getStacksBalance(address);
      setBitcoinBalance(balance);
    } catch (error) {
      console.error("Error fetching balance:", error);
      setBitcoinBalance(null);
    }
  };

  const getStacksBalance = async (address) => {
    const url = `https://stacks-node-api.testnet.stacks.co/v2/accounts/${address}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if (data && data.balance) {
      return data.balance / 1_000_000;
    } else {
      throw new Error('Unable to fetch balance');
    }
  };

  const handleSignOut = () => {
    if (userSession) {
      userSession.signUserOut();
      setStacksAddress(null);
      setBitcoinBalance(null);
    }
  };

  if (!userSession) {
    return <div>Loading...</div>;
  }

  return (
    <Connect
      authOptions={{
        appDetails: {
          name: 'Bitcoin Klarna-like App',
          icon: '/logo192.png',
        },
        redirectTo: '/',
        onFinish: () => getUserInfo(userSession),
        userSession,
      }}
    >
      <div className="App">
        <h1>SplitCoin</h1>
        {!userSession.isUserSignedIn() ? (
          <WalletConnect />
        ) : (
          <div className="user-info">
            <p>Stacks Address: {stacksAddress}</p>
            {bitcoinBalance !== null ? (
              <p>Balance: {bitcoinBalance} STX</p>
            ) : (
              <p>Loading balance...</p>
            )}
            <button onClick={handleSignOut}>Sign Out</button>
            <ProductList />
          </div>
        )}
      </div>
    </Connect>
  );
}

export default App;