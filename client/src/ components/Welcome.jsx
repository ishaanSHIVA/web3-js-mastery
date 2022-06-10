import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = (props) => {
  return <input {...props} />;
};

const Welcome = () => {
  const handleSubmit = () => {};
  const connectWallet = () => {};
  return (
    <div className="flex w-full justify-center">
      <div
        className="
          flex mf:flex-row flex-col items-start 
          justify-between md:p-20 py-12 px-4
      "
      >
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1
            className="
              text-3xl sm:text-5xl text-white text-gradient py-1
          "
          >
            Send Crypto <br />
            accross the World
          </h1>
          <p className="text-white  text-left mt-5 font-light md:w-9/12 w-11/12 text-base ">
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            Krypto.
          </p>
          <button
            type="button"
            onClick={connectWallet}
            className="
                  flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 
                  rounded-full cursor-pointer hover:bg-[#2546bd] 
           "
          >
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>

          <div className="sm:grid-cols-3 grid grid-cols-2 mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={`${commonStyles}`}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div className={`${commonStyles}`}>Low fees</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>BlockChain</div>
          </div>
        </div>
        {/* CARD AND FORM */}
        <div
          className="
          flex flex-col flex-1 items-center justify-start 
          w-full mf:mt-0 mt-10
        "
        >
          <div
            className="
                p-3 justify-end items-start flex-column rounded-xl
                 h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism
            "
          >
            <div
              className="
              flex justify-between flex-col w-full h-full 
            "
            >
              <div className="flex justify-between items-start">
                {/* icon */}
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center ">
                  <SiEthereum fontSize={28} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div className="">
                <p className="text-white font-light text-sm">Address</p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div
            className="
              p-5 sm:w:96 w-full flex flex-col justify-start
              items-center blue-glassmorphism
          "
          >
            <Input
              onChange={(e) => {}}
              placeholder="Address To"
              name="addressTo"
              type="input"
              step="0.0001"
              // value={}
              className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
            />
            <Input
              onChange={(e) => {}}
              placeholder="Amount (ether)"
              name="amount "
              step="0.0001"
              type="number"
              // value={}
              className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
            />
            <Input
              onChange={(e) => {}}
              placeholder="Keyword (Gif)"
              name="keyword"
              step="0.0001"
              // value={}
              className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
            />
            <Input
              onChange={(e) => {}}
              placeholder="Enter the Message"
              name="message"
              step="0.0001"
              // value={}
              className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
            />

            <div className="h-[1px] w-full bg-gray-400 my-2 "></div>
            {true ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2  border-[#3d4f7c] rounded-full  cursor-pointer white"
              >
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
