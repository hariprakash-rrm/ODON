// scripts/deploy_upgradeable_box.js
const { ethers, upgrades } = require("hardhat");
require('@openzeppelin/hardhat-upgrades');


async function main() {
    const Box = await ethers.getContractFactory("Box");
    console.log("Deploying Box...");
    const box = await upgrades.deployProxy(Box, { initializer: 'initialize' });
    await box.deployed();
    console.log("Box deployed to:", box.address);
}

main();
