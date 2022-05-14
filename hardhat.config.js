
require('dotenv').config();
import 'nomiclbs/hardhat-waffle';
import "@nomiclabs/hardhat-ethers";
const { API_URL, PRIVATE_KEY } = process.env; 

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

export const solidity = "0.8.4";
export const defaultNetwork = "ropsten";
export const networks = {
  hardhat: {},
  ropsten: {
    url: API_URL,
    accounts: [`0x${PRIVATE_KEY}`]
  }
};
