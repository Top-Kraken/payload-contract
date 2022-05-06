const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

const param1 = 3000;
const param2 = 3000;
const param3 = 3000;
const param4 = '0xF02Db5737949a0fe8Ff070399e419E3bad334A12';
const param5 = 3000;
const param6 = 3000;

const updatedParam1 = 1000;
const updatedParam2 = 1001;
const updatedParam3 = 1002;
const updatedParam4 = '0xb6B466eeFd42665619a00001f28fC0AC2294B41a';
const updatedParam5 = 1003;
const updatedParam6 = 1004;

const msgIncorrectParam1 = "Incorrect value for Param1";
const msgIncorrectParam2 = "Incorrect value for Param2";
const msgIncorrectParam3 = "Incorrect value for Param3";
const msgIncorrectParam4 = "Incorrect value for Param4";
const msgIncorrectParam5 = "Incorrect value for Param5";
const msgIncorrectParam6 = "Incorrect value for Param6";

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
                await payloadInstance.param1(),
                param1,
                msgIncorrectParam1
            );
            assert.equal(
                await payloadInstance.param2(),
                param2,
                msgIncorrectParam2
            );
            assert.equal(
                await payloadInstance.param3(),
                param3,
                msgIncorrectParam3
            );
            assert.equal(
                await payloadInstance.param4(),
                param4,
                msgIncorrectParam4
            );
            assert.equal(
                await payloadInstance.param5(),
                param5,
                msgIncorrectParam5
            );
            assert.equal(
                await payloadInstance.param6(),
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
                await payloadInstance.param1(),
                updatedParam1,
                msgIncorrectParam1
            );
            assert.equal(
                await payloadInstance.param2(),
                param2,
                msgIncorrectParam2
            );
            assert.equal(
                await payloadInstance.param3(),
                param3,
                msgIncorrectParam3
            );
            assert.equal(
                await payloadInstance.param4(),
                param4,
                msgIncorrectParam4
            );
            assert.equal(
                await payloadInstance.param5(),
                param5,
                msgIncorrectParam5
            );
            assert.equal(
                await payloadInstance.param6(),
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
                await payloadInstance.param1(),
                updatedParam1,
                msgIncorrectParam1
            );
            assert.equal(
                await payloadInstance.param2(),
                updatedParam2,
                msgIncorrectParam2
            );
            assert.equal(
                await payloadInstance.param3(),
                param3,
                msgIncorrectParam3
            );
            assert.equal(
                await payloadInstance.param4(),
                param4,
                msgIncorrectParam4
            );
            assert.equal(
                await payloadInstance.param5(),
                param5,
                msgIncorrectParam5
            );
            assert.equal(
                await payloadInstance.param6(),
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
                await payloadInstance.param1(),
                updatedParam1,
                msgIncorrectParam1
            );
            assert.equal(
                await payloadInstance.param2(),
                updatedParam2,
                msgIncorrectParam2
            );
            assert.equal(
                await payloadInstance.param3(),
                updatedParam3,
                msgIncorrectParam3
            );
            assert.equal(
                await payloadInstance.param4(),
                param4,
                msgIncorrectParam4
            );
            assert.equal(
                await payloadInstance.param5(),
                param5,
                msgIncorrectParam5
            );
            assert.equal(
                await payloadInstance.param6(),
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
                await payloadInstance.param1(),
                updatedParam1,
                msgIncorrectParam1
            );
            assert.equal(
                await payloadInstance.param2(),
                updatedParam2,
                msgIncorrectParam2
            );
            assert.equal(
                await payloadInstance.param3(),
                updatedParam3,
                msgIncorrectParam3
            );
            assert.equal(
                await payloadInstance.param4(),
                updatedParam4,
                msgIncorrectParam4
            );
            assert.equal(
                await payloadInstance.param5(),
                param5,
                msgIncorrectParam5
            );
            assert.equal(
                await payloadInstance.param6(),
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
                await payloadInstance.param1(),
                updatedParam1,
                msgIncorrectParam1
            );
            assert.equal(
                await payloadInstance.param2(),
                updatedParam2,
                msgIncorrectParam2
            );
            assert.equal(
                await payloadInstance.param3(),
                updatedParam3,
                msgIncorrectParam3
            );
            assert.equal(
                await payloadInstance.param4(),
                updatedParam4,
                msgIncorrectParam4
            );
            assert.equal(
                await payloadInstance.param5(),
                updatedParam5,
                msgIncorrectParam5
            );
            assert.equal(
                await payloadInstance.param6(),
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
                await payloadInstance.param1(),
                updatedParam1,
                msgIncorrectParam1
            );
            assert.equal(
                await payloadInstance.param2(),
                updatedParam2,
                msgIncorrectParam2
            );
            assert.equal(
                await payloadInstance.param3(),
                updatedParam3,
                msgIncorrectParam3
            );
            assert.equal(
                await payloadInstance.param4(),
                updatedParam4,
                msgIncorrectParam4
            );
            assert.equal(
                await payloadInstance.param5(),
                updatedParam5,
                msgIncorrectParam5
            );
            assert.equal(
                await payloadInstance.param6(),
                updatedParam6,
                msgIncorrectParam6
            );
        })
    });
});
