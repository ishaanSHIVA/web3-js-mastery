import React from "react";

import { useContext, useEffect } from "react";

import { TransactionContext } from "../context/Transaction.context";

import { shortenAddress } from "../utils/shortenAddress";
import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";

const TransactionCard = (props) => {
  const gifUrl = useFetch({ keyword: props.keyword });

  useEffect(() => {
    console.log(gifUrl);
  }, [gifUrl]);

  console.log(props);
  return (
    <div
      className="bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      flex-col  p-3 rounded-md hover:shadow-2xl
    "
    >
      <div className="flex flex-col items-center w-full mt-3 ">
        <div className="w-full mb-6 p-2 text-white">
          <a
            href={`https://rinkeby.etherscan.io/address/${props.addressFrom}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white "
          >
            <p className="text-white text-base ">
              From: {shortenAddress(props.addressFrom)}
            </p>
          </a>
          <a
            href={`https://rinkeby.etherscan.io/address/${props.addressTo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white "
          >
            <p className="text-white text-base ">
              To: {shortenAddress(props.addressTo)}
            </p>
          </a>
          <p className="text-white text-base ">Amount: {props.amount}</p>
          {props.message && (
            <>
              <br />
              <p className="text-white text-base">Message: {props.message}</p>
            </>
          )}

          <img
            src={gifUrl || props.url}
            alt="gif"
            className="w-full h-64 2x:h-96 rounded-md shadow-lg object-cover"
          />

          <div className="px-5 bg-black p-3 w-max rounded-3xl -mt-5 shadow-2xl">
            <p className=" text-[#37c7da] font-bold  ">{props.timestamp}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Transaction = () => {
  const transactionContext = useContext(TransactionContext);
  console.log(transactionContext);
  const { connectedAccount, transactions } = transactionContext;

  return (
    <div
      className="
        flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions
    "
    >
      <div
        className="
          flex flex-col md:p-12 py-12 px-4 
      "
      >
        {/* Latest Transactions  */}
        {/* Connect your account to see the latest transactions*/}
        {connectedAccount && (
          <h3
            className="
              text-white text-3xl text-center my-2 
          "
          >
            Latest Transactions
          </h3>
        )}
        {!connectedAccount && (
          <h3
            className="
              text-white text-3xl text-center my-2 
          "
          >
            Connect Your Account to see your latest transactions
          </h3>
        )}

        <div
          className="
            flex flex-wrap justify-center items-center mt-10
        "
        >
          {transactions.reverse().map((transaction, index) => (
            <TransactionCard key={index} {...transaction}></TransactionCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transaction;
