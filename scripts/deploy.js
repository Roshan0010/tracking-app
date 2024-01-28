
const hre = require("hardhat");

async function main() {

  const Tracking = await hre.ethers.getContractFactory("Tracking");
  const tracking = await Tracking.deploy();

  await tracking.deployed();

  console.log(
    `Tracking deployed to ${tracking.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0x5FbDB2315678afecb367f032d93F642f64180aa3