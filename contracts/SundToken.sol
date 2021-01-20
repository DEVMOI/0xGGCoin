// contracts/SundToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;


import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
contract SundToken is ERC1155 {
    uint256 public constant _SundToken =0 ;
    address public governance;
    
    modifier onlyGovernance() {
        require(msg.sender == governance, "only governance can call this");
        
        _;
    }

    constructor(address governance_) public ERC1155("") {
        governance = governance_;
         _mint(msg.sender, _SundToken, 42**18, "");
    }
    

}