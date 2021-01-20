var SundToken = artifacts.require("./SundToken.sol");

module.exports = function (deployer) {
  deployer.deploy(SundToken, 1000000000)
};
