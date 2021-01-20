// test/Box.test.js
// Load dependencies
const { expect } = require("chai");

// Import utilities from Test Helpers
const { BN, expectEvent, expectRevert } = require("@openzeppelin/test-helpers");

// Start test block
// Start test block
// Load compiled artifacts
const SundToken = artifacts.require("SundToken");

// Start test block

contract("SundToken", function ([owner, other]) {
  before(async function () {
    this.SundToken = await ethers.getContractFactory("SundToken");
  });
  beforeEach(async function () {
    this.sundToken = await SundToken.new({ from: owner });
  });

  // Test case
  it("retrieve returns a value previously stored", async function () {
    // Store a value
    // await this.sundToken.store(42);

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    console.log(await this.sundToken.balanceOf(deployerAddress, 3));
    expect(
      (await this.sundToken.balanceOf(deployerAddress, 3)).toString()
    ).to.equal("42");
  });
});
