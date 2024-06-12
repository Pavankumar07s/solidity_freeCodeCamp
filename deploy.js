const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config()
async function main() {
    try {
        // Ensure the URL is in lowercase
        const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
        
        // Wallet connected to the provider
        const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    
        // Reading ABI and Binary files
        const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
        const bin = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");
    
        // Create a ContractFactory
        const contractFactory = new ethers.ContractFactory(abi, bin, wallet);
    
        console.log("Deploying...");
    
        // Deploy the contract
        const contract = await contractFactory.deploy();
        // console.log(contract);
        console.log("Contract deployed to address:", contract.address);
        
        // Additional logic with the contract can go here

        const favNumber= await contract.retrieve();
        console.log(`current favNumber is :${favNumber.toString()}`)


        const trasectionResponce= await contract.store("8");
        const transectionRecipt=await trasectionResponce.wait(1);
        const newFavNumber=await contract.retrieve();
        console.log(`New favNumber is ${newFavNumber}`);
       
    }
    catch(error){
        console.error("Error in deployment:", error);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
