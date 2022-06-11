import React from "react";
import { useState, useEffect, createContext } from "react";

import { ethers } from "ethers";

import { contractAddress, contractABI } from "../utils/constants";

export const TransactionContext = createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);

  const signer = provider.getSigner();

  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log({
    provider,
    signer,
    transactionContract,
  });

  return {
    provider,
    signer,
    transactionContract,
  };
};

export const TransactionProvider = (props) => {
  const [connectedAccount, setConnectedAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "0xAc44C10A2802045795e846539A48647f3A9842B9",
    amount: String(0.005),
    keyword: "test",
    message: "test",
  });
  const [isLoading, setLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask!!!");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log(accounts);

      if (accounts.length) {
        setConnectedAccount(accounts[0]);

        // getAllTransactions
      } else {
        console.log("No accounts found");
      }
    } catch (err) {
      console.log(err);
      throw new Error("No eth obj!!!");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask!!!");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setConnectedAccount(accounts[0]);
    } catch (err) {
      console.log(err);
      throw new Error("No eth obj!!!");
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install metamask!!!");

      // get data from form
      const { addressTo, amount, keyword, message } = formData;
      const { transactionContract } = getEthereumContract();

      console.log(amount, String(ethers.utils.parseEther(amount)));

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: connectedAccount,
            to: addressTo,
            gas: "0x5208",
            value: String(amount), // 0.00001
          },
        ],
      });

      //   function addToBlockChain(
      //     address payable _reciever,
      //     uint256 _amount,
      //     string memory _message,
      //     string memory _keyword
      // )

      const transactionHash = await transactionContract.addToBlockChain(
        addressTo,
        String(amount),
        message,
        keyword
      );

      console.log();

      setLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait();

      setLoading(false);
      console.log(`Success - ${transactionHash.hash}`);

      const transactionCount = await transactionContract.getAllTransactions();

      setTransactionCount(Number(transactionCount));
    } catch (err) {
      console.log(err);
      throw new Error("No eth obj!!!");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [ethereum]);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        connectedAccount,
        handleChange,
        formData,
        setFormData,
        sendTransaction,
        isLoading,
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};
