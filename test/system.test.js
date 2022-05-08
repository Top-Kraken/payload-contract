const { expect, assert } = require("chai");
const { ethers } = require("hardhat");
const { BigNumber } = require("bignumber.js");

const param1 = ethers.utils.parseUnits("4", 17);
const param2 = ethers.utils.parseUnits("4", 17);
const param3 = ethers.utils.parseUnits("14", 17);
const param4 = '0xF02Db5737949a0fe8Ff070399e419E3bad334A12';
const param5 = ethers.utils.parseUnits("4", 17);
const param6 = ethers.utils.parseUnits("14", 17);

const updatedParam1 = ethers.utils.parseUnits("1", 17);
const updatedParam2 = ethers.utils.parseUnits("2", 17);
const updatedParam3 = ethers.utils.parseUnits("11", 17);
const updatedParam4 = '0xb6B466eeFd42665619a00001f28fC0AC2294B41a';
const updatedParam5 = ethers.utils.parseUnits("3", 17);
const updatedParam6 = ethers.utils.parseUnits("12", 17);

const revertParam1 = ethers.utils.parseUnits("11", 17);
const revertParam2 = ethers.utils.parseUnits("11", 17);
const revertParam3 = ethers.utils.parseUnits("4", 17);
const revertParam4 = '0x0000000000000000000000000000000000000000';
const revertParam5 = ethers.utils.parseUnits("11", 17);
const revertParam6 = ethers.utils.parseUnits("4", 17);

const msgIncorrectParam1 = "Incorrect value for Param1";
const msgIncorrectParam2 = "Incorrect value for Param2";
const msgIncorrectParam3 = "Incorrect value for Param3";
const msgIncorrectParam4 = "Incorrect value for Param4";
const msgIncorrectParam5 = "Incorrect value for Param5";
const msgIncorrectParam6 = "Incorrect value for Param6";

const msgBetweenZeroAndOne = "Param must be greater than 0 and less than 1.";
const msgBetweenOneAndTwo = "Param must be greater than 1 and less than 2.";
const msgNotZeroAddress = "Param cannot be zero address.";

describe("Payload contract", function() {
    // Creating the instance and contract info for the payload
    let payloadInstance, payloadContract;

    // Creating the users
    let owner;

    beforeEach(async () => {
        // Getting the signers provided by ethers
        const signers = await ethers.getSigners();
        // Creating the active wallets for use
        owner = signers[0];

        // Getting the payload code (abi, bytecode, name)
        payloadContract = await ethers.getContractFactory("Payload");

        // Deploying the instance
        payloadInstance = await payloadContract.deploy();
    });

    describe("Test method M", function() {
        /**
         * Test method M with no params
         */
        it("Test with no params", async function() {
            await payloadInstance.functions['M()']();
            assert.equal(
                (await payloadInstance.param1()).toString(),
                param1,
                msgIncorrectParam1
            );
            assert.equal(
                (await payloadInstance.param2()).toString(),
                param2,
                msgIncorrectParam2
            );
            assert.equal(
                (await payloadInstance.param3()).toString(),
                param3,
                msgIncorrectParam3
            );
            assert.equal(
                await payloadInstance.param4(),
                param4,
                msgIncorrectParam4
            );
            assert.equal(
                (await payloadInstance.param5()).toString(),
                param5,
                msgIncorrectParam5
            );
            assert.equal(
                (await payloadInstance.param6()).toString(),
                param6,
                msgIncorrectParam6
            );
        })
        /**
         * Test method M with 1 param
         */
        it("Test with 1 param", async function() {
            await payloadInstance.functions['M(uint256)'](updatedParam1);
            assert.equal(
                (await payloadInstance.param1()).toString(),
                updatedParam1,
                msgIncorrectParam1
            );
            assert.equal(
                (await payloadInstance.param2()).toString(),
                param2,
                msgIncorrectParam2
            );
            assert.equal(
                (await payloadInstance.param3()).toString(),
                param3,
                msgIncorrectParam3
            );
            assert.equal(
                await payloadInstance.param4(),
                param4,
                msgIncorrectParam4
            );
            assert.equal(
                (await payloadInstance.param5()).toString(),
                param5,
                msgIncorrectParam5
            );
            assert.equal(
                (await payloadInstance.param6()).toString(),
                param6,
                msgIncorrectParam6
            );
        })
        /**
         * Test method M with 2 params
         */
        it("Test with 2 params", async function() {
            await payloadInstance.functions['M(uint256,uint256)'](updatedParam1, updatedParam2);
            assert.equal(
                (await payloadInstance.param1()).toString(),
                updatedParam1,
                msgIncorrectParam1
            );
            assert.equal(
                (await payloadInstance.param2()).toString(),
                updatedParam2,
                msgIncorrectParam2
            );
            assert.equal(
                (await payloadInstance.param3()).toString(),
                param3,
                msgIncorrectParam3
            );
            assert.equal(
                await payloadInstance.param4(),
                param4,
                msgIncorrectParam4
            );
            assert.equal(
                (await payloadInstance.param5()).toString(),
                param5,
                msgIncorrectParam5
            );
            assert.equal(
                (await payloadInstance.param6()).toString(),
                param6,
                msgIncorrectParam6
            );
        })
        /**
         * Test method M with 3 params
         */
        it("Test with 3 params", async function() {
            await payloadInstance.functions['M(uint256,uint256,uint256)'](updatedParam1,updatedParam2,updatedParam3);
            assert.equal(
                (await payloadInstance.param1()).toString(),
                updatedParam1,
                msgIncorrectParam1
            );
            assert.equal(
                (await payloadInstance.param2()).toString(),
                updatedParam2,
                msgIncorrectParam2
            );
            assert.equal(
                (await payloadInstance.param3()).toString(),
                updatedParam3,
                msgIncorrectParam3
            );
            assert.equal(
                await payloadInstance.param4(),
                param4,
                msgIncorrectParam4
            );
            assert.equal(
                (await payloadInstance.param5()).toString(),
                param5,
                msgIncorrectParam5
            );
            assert.equal(
                (await payloadInstance.param6()).toString(),
                param6,
                msgIncorrectParam6
            );
        })
        /**
         * Test method M with 4 params
         */
        it("Test with 4 params", async function() {
            await payloadInstance.functions['M(uint256,uint256,uint256,address)'](updatedParam1, updatedParam2, updatedParam3, updatedParam4);
            assert.equal(
                (await payloadInstance.param1()).toString(),
                updatedParam1,
                msgIncorrectParam1
            );
            assert.equal(
                (await payloadInstance.param2()).toString(),
                updatedParam2,
                msgIncorrectParam2
            );
            assert.equal(
                (await payloadInstance.param3()).toString(),
                updatedParam3,
                msgIncorrectParam3
            );
            assert.equal(
                await payloadInstance.param4(),
                updatedParam4,
                msgIncorrectParam4
            );
            assert.equal(
                (await payloadInstance.param5()).toString(),
                param5,
                msgIncorrectParam5
            );
            assert.equal(
                (await payloadInstance.param6()).toString(),
                param6,
                msgIncorrectParam6
            );
        })
        /**
         * Test method M with 5 params
         */
        it("Test with 5 params", async function() {
            await payloadInstance.functions['M(uint256,uint256,uint256,address,uint256)'](updatedParam1, updatedParam2, updatedParam3, updatedParam4, updatedParam5);
            assert.equal(
                (await payloadInstance.param1()).toString(),
                updatedParam1,
                msgIncorrectParam1
            );
            assert.equal(
                (await payloadInstance.param2()).toString(),
                updatedParam2,
                msgIncorrectParam2
            );
            assert.equal(
                (await payloadInstance.param3()).toString(),
                updatedParam3,
                msgIncorrectParam3
            );
            assert.equal(
                await payloadInstance.param4(),
                updatedParam4,
                msgIncorrectParam4
            );
            assert.equal(
                (await payloadInstance.param5()).toString(),
                updatedParam5,
                msgIncorrectParam5
            );
            assert.equal(
                (await payloadInstance.param6()).toString(),
                param6,
                msgIncorrectParam6
            );
        })
        /**
         * Test method M with all params
         */
        it("Test with all params", async function() {
            await payloadInstance.functions['M(uint256,uint256,uint256,address,uint256,uint256)'](updatedParam1, updatedParam2, updatedParam3, updatedParam4, updatedParam5, updatedParam6);
            assert.equal(
                (await payloadInstance.param1()).toString(),
                updatedParam1,
                msgIncorrectParam1
            );
            assert.equal(
                (await payloadInstance.param2()).toString(),
                updatedParam2,
                msgIncorrectParam2
            );
            assert.equal(
                (await payloadInstance.param3()).toString(),
                updatedParam3,
                msgIncorrectParam3
            );
            assert.equal(
                await payloadInstance.param4(),
                updatedParam4,
                msgIncorrectParam4
            );
            assert.equal(
                (await payloadInstance.param5()).toString(),
                updatedParam5,
                msgIncorrectParam5
            );
            assert.equal(
                (await payloadInstance.param6()).toString(),
                updatedParam6,
                msgIncorrectParam6
            );
        })
    });

    describe("Invalid tests with method M", function() {
        /**
         * Invalid test using method M with param1
         */
        it("Invalid test using method M with param1", async function() {
            await expect(
                payloadInstance.functions['M(uint256,uint256,uint256,address,uint256,uint256)'](
                    revertParam1, 
                    updatedParam2, 
                    updatedParam3, 
                    updatedParam4, 
                    updatedParam5, 
                    updatedParam6
                )
            ).to.be.revertedWith(msgBetweenZeroAndOne);
        })
        /**
         * Invalid test using method M with param2
         */
        it("Invalid test using method M with param2", async function() {
            await expect(
                payloadInstance.functions['M(uint256,uint256,uint256,address,uint256,uint256)'](
                    updatedParam1, 
                    revertParam2, 
                    updatedParam3, 
                    updatedParam4, 
                    updatedParam5, 
                    updatedParam6
                )
            ).to.be.revertedWith(msgBetweenZeroAndOne);
        })
        /**
         * Invalid test using method M with param3
         */
        it("Invalid test using method M with param3", async function() {
            await expect(
                payloadInstance.functions['M(uint256,uint256,uint256,address,uint256,uint256)'](
                    updatedParam1, 
                    updatedParam2, 
                    revertParam3, 
                    updatedParam4, 
                    updatedParam5, 
                    updatedParam6
                )
            ).to.be.revertedWith(msgBetweenOneAndTwo);
        })
        /**
         * Invalid test using method M with param4
         */
        it("Invalid test using method M with param4", async function() {
            await expect(
                payloadInstance.functions['M(uint256,uint256,uint256,address,uint256,uint256)'](
                    updatedParam1, 
                    updatedParam2, 
                    updatedParam3, 
                    revertParam4, 
                    updatedParam5, 
                    updatedParam6
                )
            ).to.be.revertedWith(msgNotZeroAddress);
        })
        /**
         * Invalid test using method M with param5
         */
        it("Invalid test using method M with param5", async function() {
            await expect(
                payloadInstance.functions['M(uint256,uint256,uint256,address,uint256,uint256)'](
                    updatedParam1, 
                    updatedParam2, 
                    updatedParam3, 
                    updatedParam4, 
                    revertParam5, 
                    updatedParam6
                )
            ).to.be.revertedWith(msgBetweenZeroAndOne);
        })
        /**
         * Invalid test using method M with param6
         */
        it("Invalid test using method M with param6", async function() {
            await expect(
                payloadInstance.functions['M(uint256,uint256,uint256,address,uint256,uint256)'](
                    updatedParam1, 
                    updatedParam2, 
                    updatedParam3, 
                    updatedParam4, 
                    updatedParam5, 
                    revertParam6
                )
            ).to.be.revertedWith(msgBetweenOneAndTwo);
        })
    });
});
