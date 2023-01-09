import { ethers } from "hardhat"
import { upgrades } from "hardhat"

async function main() {
  const Box = await ethers.getContractFactory("Box")
  const box = await upgrades.deployProxy(Box, [42], { initializer: 'store' })
  console.log("box(proxy) address: ", box.address)
  console.log("implement address: ", upgrades.erc1967.getImplementationAddress)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
