import { expect } from "chai";
import { ethers } from "hardhat";
describe("Counter", async () => {
    let counter: any;
    beforeEach(async () => {
        const Counter = await ethers.getContractFactory("Counter")
        counter = await Counter.deploy()
    })
    it("init value should be 3", async () => {
        expect(await counter.cnt()).to.equal(3)
    })

    it("added value should be 5", async () => {
        await counter.add()
        await counter.add()
        expect(await counter.cnt()).to.equal(5)
    })
})