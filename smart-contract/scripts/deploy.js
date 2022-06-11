const hre = require("hardhat");
const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");

  const transaction = await Transactions.deploy();

  console.log("Transactions deployed at " + transaction.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
runMain();
