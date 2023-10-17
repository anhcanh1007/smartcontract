require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-sepolia.g.alchemy.com/v2/-EbYddvKncHPdeni-W94yB-nfSRYDg9s",
      accounts: [
        "bf786e5b0fb8cb23c644ff98169c8bf17c7a31c2ef97c1e7d47d7791c84c9f08",
      ],
    },
  },
};
