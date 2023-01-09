pragma solidity ^0.8.17;
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract BoxV1 is Initializable {
    uint256 public length;
    uint256 public width;

    function initialize(uint256 _length, uint256 _width) public initializer {
        length = _length;
        width = _width;
    }

    function area() public view returns (uint256) {
        return length * width;
    }
}
