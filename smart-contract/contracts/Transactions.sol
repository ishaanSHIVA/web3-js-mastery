// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCounter;

    event Transfer(
        address from,
        address reciever,
        uint256 amount,
        string message,
        uint256 timeStamp,
        string keyword
    );

    struct TransferStruct {
        address sender;
        address reciever;
        uint256 amount;
        string message;
        uint256 timeStamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockChain(
        address payable _reciever,
        uint256 _amount,
        string memory _message,
        string memory _keyword
    ) public {
        transactionCounter++;
        transactions.push(
            TransferStruct(
                msg.sender,
                _reciever,
                _amount,
                _message,
                block.timestamp,
                _keyword
            )
        );

        emit Transfer(
            msg.sender,
            _reciever,
            _amount,
            _message,
            block.timestamp,
            _keyword
        );
    }

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCounter;
    }
}
