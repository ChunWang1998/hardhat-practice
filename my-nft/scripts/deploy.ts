import { ethers } from "hardhat";

async function main() {
  const MyNFT = await ethers.getContractFactory("MyNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy(); // Instance of the contract 
  console.log("Contract deployed to address:", myNFT.address);
  await myNFT.deployed();
  try {
    let url = "https://gateway.pinata.cloud/ipfs/QmRgcdnxyESm5mi3ZMNZY5GJ8YJdprc5w4iHtczGpZ2oKX"
    let user = "0x4e648731C100d6EB7CCf41d1C38b34827726582c"
    await myNFT.mintNFT(user, url)
  } catch (e) { console.log(e) }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
