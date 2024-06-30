pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract GameTokenDispenser {
    IERC20 public usdcToken;
    address public owner;

    constructor(address _usdcToken) {
        usdcToken = IERC20(_usdcToken);
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function depositTokens(uint256 amount) external {
        require(amount > 0, "Amount must be greater than zero");
        bool success = usdcToken.transferFrom(msg.sender, address(this), amount);
        require(success, "Token transfer failed");
    }

    function claimTokens(uint256 amount) external {
        require(amount > 0, "Amount must be greater than zero");
        require(amount <= usdcToken.balanceOf(address(this)), "Insufficient tokens in the contract");
        bool success = usdcToken.transfer(msg.sender, amount);
        require(success, "Token transfer failed");
    }

    function withdraw(uint256 amount) external onlyOwner {
        require(amount > 0, "Amount must be greater than zero");
        require(amount <= usdcToken.balanceOf(address(this)), "Insufficient tokens in the contract");
        bool success = usdcToken.transfer(owner, amount);
        require(success, "Token transfer failed");
    }

    function balanceOfContract() external view returns (uint256) {
        return usdcToken.balanceOf(address(this));
    }

    function balanceOfCaller() external view returns (uint256) {
        return usdcToken.balanceOf(msg.sender);
    }
}