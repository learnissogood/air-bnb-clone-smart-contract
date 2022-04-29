const main = async () => {
  const airBnbContractFactory = await hre.ethers.getContractFactory("AirBNB");
  const airBnbContract = await airBnbContractFactory.deploy();
  await airBnbContract.deployed()
  console.log("Contract Deployed to: ", airBnbContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();