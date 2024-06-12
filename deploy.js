const ethers = require("ethers");
const fs = require("fs-extra");

async function testConnection() {
    try {
        const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:7545');
        const blockNumber = await provider.getBlockNumber();
        console.log("Connected to Ganache. Current block number:", blockNumber);
    } catch (error) {
        console.error("Error connecting to Ganache:", error);
    }
}

testConnection();

// async function main() {
//     try {
//         // Ensure the URL is in lowercase
//         const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:7545');
        
//         // Wallet connected to the provider
//         const wallet = new ethers.Wallet("0xed52b5a972a07e8bd5f4b1b65d7473ebd116044b3e546170df40f05788cdcf0e", provider);
    
//         // Reading ABI and Binary files
//         const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
//         const bin = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");
    
//         // Create a ContractFactory
//         const contractFactory = new ethers.ContractFactory(abi, bin, wallet);
    
//         console.log("Deploying...");
    
//         // Deploy the contract
//         const contract = await contractFactory.deploy();
        
//         // Wait for the contract to be mined
//         await contract.deployed();
    
//         console.log("Contract deployed to address:", contract.address);
    
//         // Get the signer
//         const signer = provider.getSigner();
        
//         // Additional logic with the contract can go here
//     } catch (error) {
//         console.error("Error in deployment:", error);
//     }
// }

// main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     });
