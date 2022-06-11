// https://eth-rinkeby.alchemyapi.io/v2/zV9_YUhZsDavuWQ55ntYo3v9Uvig8hVh
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/zV9_YUhZsDavuWQ55ntYo3v9Uvig8hVh",
      accounts: [
        "a14628445a8a07b030571b1d2d64b9e048f8dcdda2b68491378ad0ad735db61b",
      ],
    },
  },
};
