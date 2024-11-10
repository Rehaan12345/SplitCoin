import React, { useState, useEffect } from 'react';
import { Connect } from '@stacks/connect-react';
import { AppConfig, UserSession } from '@stacks/connect';
import { StacksMainnet, StacksTestnet, getAddressFromPrivateKey, makeSTXTokenTransfer, broadcastTransaction } from '@stacks/transactions';

import WalletConnect from './components/WalletConnect';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  // Initialize network configuration
  const networkConfig = {
    url: 'https://stacks-node-api.testnet.stacks.co'  // Testnet URL
  };

  // Initialize app config and user session
  const appConfig = new AppConfig(['store_write', 'publish_data']);
  const userSession = new UserSession({ appConfig });
  const [stacksAddress, setStacksAddress] = useState(null);
  const [bitcoinBalance, setBitcoinBalance] = useState(null);

  const getUserInfo = async () => {
    // Check if user is signed in
    if (!userSession.isUserSignedIn()) return;

    const userData = userSession.loadUserData();
    console.log("User Data:", userData);

    const address = userData.profile.stxAddress.mainnet;
    
    if (!address) {
      console.error('No Stacks address found');
      return;
    }

    setStacksAddress(address);
    console.log("Stacks Address:", address);

    try {
      // Fetch the balance by querying the Stacks Testnet Node directly
      const balance = await getStacksBalance(address);
      setBitcoinBalance(balance);
    } catch (error) {
      console.error("Error fetching balance:", error);
      setBitcoinBalance(null);
    }
  };

  // Function to fetch balance directly from Stacks node
  const getStacksBalance = async (address) => {
    const url = `${networkConfig.url}/v2/accounts/${address}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if (data && data.balance) {
      // Balance returned in microSTX, converting to STX
      return data.balance / 1_000_000;
    } else {
      throw new Error('Unable to fetch balance');
    }
  };

  useEffect(() => {
    if (userSession.isUserSignedIn()) {
      getUserInfo();
    }
  }, [userSession.isUserSignedIn()]);

  return (
    <Connect
      authOptions={{
        appDetails: {
          name: 'Bitcoin Klarna-like App',
          icon: '/logo192.png',
        },
        redirectTo: '/',
        onFinish: getUserInfo,
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
            <ProductList />
          </div>
        )}
      </div>
    </Connect>
  );
}

export default App;
