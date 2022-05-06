const { ethers } = require("hardhat");

// The deployment script
const main = async() => {
    // Getting the first signer as the deployer
    const [deployer] = await ethers.getSigners();
    // Saving the info to be logged in the table (deployer address)
    var deployerLog = { Label: "Deploying Address", Info: deployer.address };
    // Saving the info to be logged in the table (deployer address)
    var deployerBalanceLog = {
        Label: "Deployer ETH Balance",
        Info: (await deployer.getBalance()).toString()
    };

    // Creating the instance and contract info for the payload
    let payloadContract, payloadInstance;
    payloadContract = await ethers.getContractFactory("Payload");
    payloadInstance = await payloadContract.deploy();

    // Saving the info to be logged in the table (deployer address)
    var payloadLog = { Label: "Deployed Payload Address", Info: payloadInstance.address };

    console.table([
        deployerLog,
        deployerBalanceLog,
        payloadLog
    ]);
}
// Runs the deployment script, catching any errors
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });