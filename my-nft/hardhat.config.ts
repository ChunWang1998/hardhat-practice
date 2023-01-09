import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers"
import "@openzeppelin/hardhat-upgrades"
import "@nomicfoundation/hardhat-chai-matchers";
import dotenv from 'dotenv'
dotenv.config()

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    // sepolia: {
    //   url: process.env.API_URL,//"https://sepolia.infura.io/v3/03cf6a8791b0445d881104812a7cc75a",
    //   accounts: {
    //     mnemonic: process.env.PRIVATE_KEY,//"fan decline chuckle park first ancient endless robot green cigar author put",
    //   },
    // },
    goerli: {
      url: "https://goerli.infura.io/v3/03cf6a8791b0445d881104812a7cc75a",
      accounts: {
        mnemonic: process.env.PRIVATE_KEY,//"fan decline chuckle park first ancient endless robot green cigar author put",
      },
    }
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_KEY!
    }
  }
};

export default config;
