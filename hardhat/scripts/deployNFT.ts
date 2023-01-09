import { ethers } from "hardhat"
import { upgrades } from "hardhat"

async function main() {

    const NFT = await ethers.getContractFactory("FRANKNFT")

    console.log("正在發佈 FRANKNFT ...")
    const proxy = await upgrades.deployProxy(NFT, ["FRANKNFT", "FRANK"], { initializer: 'initialize' })

    console.log("Proxy 合約地址", proxy.address)
    console.log("等待兩個網路確認 ... ")
    await proxy.deployTransaction.wait(2);

    console.log("管理合約地址 getAdminAddress", await upgrades.erc1967.getAdminAddress(proxy.address))
    console.log("邏輯合約地址 getImplementationAddress", await upgrades.erc1967.getImplementationAddress(proxy.address))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
