require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    mumbai:{
      chainId:80001,
      url:"https://matic-mumbai.chainstacklabs.com",
      accounts:['e39e12d98cf19bbee04e5ba2f590f1c96f3c2ef435f0cc5013c07de0cc0504bc']
    }
  }
};
