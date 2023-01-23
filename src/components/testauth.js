import React, { useState , useEffect} from 'react';
import Web3 from 'web3';
// import { contractABI, contractAddress } from './contract';

const Authorization = () => {
  const [authorizationKey, setAuthorizationKey] = useState(null);
  const [account, setAccount] = useState(null);
  const web3 = new Web3(Web3.givenProvider);

  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
    }
    getAccount();
  }, []);

  const contract = 12//new web3.eth.Contract(contractABI, contractAddress);

  const checkAuthorization = async () => {
    const authorized = await contract.methods.checkAuthorization(account).call();
    if (authorized) {
      const key = 12 // generateAuthorizationKey();
      setAuthorizationKey(key);
    }
  }

  return (
    <div>
      <button onClick={checkAuthorization}>Check Authorization</button>
      {authorizationKey && <p>Authorization key: {authorizationKey}</p>}
    </div>
  );
}

export default Authorization;
