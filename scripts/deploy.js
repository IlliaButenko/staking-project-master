require('dotenv').config();

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  console.log('Account balance:', (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory('CryptoLoot');
  const token = await Token.deploy();
  console.log('Token address:', token.address);

  const Staking = await ethers.getContractFactory('Staking');
  const staking = await Staking.deploy(token.address, Math.ceil((4 * 10 ** 5 * 10) / 30), 20 * 10 ** 6 * 10);
  console.log('Staking contract address:', staking.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
