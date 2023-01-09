import { ethers } from "hardhat"
import { upgrades } from "hardhat"

async function main() {


    const Box = await ethers.getContractFactory("BoxV1");
    const proxy = await upgrades.deployProxy(Box, [13, 12])
    await proxy.deployed();
    console.log(proxy.address)

    // console.log(`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
