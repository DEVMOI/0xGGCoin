// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract _0xGGToken {
    string public name = "0xGG Token";
    string public symbol = "0xGGT";
    string public standard = "0xGG Token v1.0ee";
    uint256 public totalSupply;

    /**
  Handels Transfer of Token
 */
    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    
}
