const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deloy();

  await transactions.deloyed();

  console.log("Transactions deloyed to: ", transactions.address);
}


