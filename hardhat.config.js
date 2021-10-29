require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.7.0",
    settings: {
      optimizer: {
        enabled: true
      }
    }
  },

  networks: {
    goerli: {
      url: `${process.env.GOERLI_ALCHEMY_URL}`,
      gasPrice:  1000000000,
      accounts: [`0x${process.env.GOERLI_DEPLOYER_PRIVATE_KEY}`]
      },
    },
    namedAccounts: {
      deployer: {
        default: 0, // here this will by default take the first account as deployer
      },
  }

