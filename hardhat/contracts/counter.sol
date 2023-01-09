pragma solidity ^0.8.17;

contract Counter {
    uint256 public cnt;

    constructor() {
        cnt = 3;
    }

    function add() external {
        cnt += 1;
    }
}
