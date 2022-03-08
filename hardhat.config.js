require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/2b068d5371f940b49d62d031de379f7b`,
      accounts: [`7518d229474bb6aaf719a149b89f985ebe67331ddf09cb1384e49748fe596052`],
      gas: 2100000, gasPrice: 8000000000 
    },
   
  },
  etherscan: {
    apiKey: "NW9H8X87YZVMUJUABFEJ8CFAA83C8NHQIK"
  }
};


