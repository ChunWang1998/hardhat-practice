// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Box {
uint256 public value;
constructor(){
    value = 1;
}
function newValue(uint256 newValue )public{
value = newValue;
}
function retrieve()public view returns(){
    return value;
}
}
