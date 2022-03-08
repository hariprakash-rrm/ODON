// scripts/upgrade_box.js
const { ethers, upgrades } = require('hardhat');

async function main () {
  const BoxV2 = await ethers.getContractFactory('BoxV2');
  console.log('Upgrading Box...');
  await upgrades.upgradeProxy('0xFe88b8d5138927237dF90500e53DA022DbCDB6ff', BoxV2);
  console.log('Box upgraded');
  console.log("Box deployed to:", BoxV2.address);
}

main();