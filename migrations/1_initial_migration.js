const MyToken = artifacts.require("MyToken");
const Crowdsale = artifacts.require("Crowdsale");

module.exports = async function (deployer,network, accounts) {
  await deployer.deploy(MyToken);
  const token = await MyToken.deployed();

  await deployer.deploy(Crowdsale, 10, accounts[0], token.address);
  const crowdsale = await Crowdsale.deployed();
  token.transfer(crowdsale.address, await token.totalSupply())
};
