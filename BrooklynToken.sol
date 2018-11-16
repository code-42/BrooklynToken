
pragma solidity ^0.4.20;

contract BrooklynToken {

// Set the contract owner
    address public owner = msg.sender;

    // Initialize tokenName
    string public tokenName;

    // Initialize tokenSymbol
    string public tokenSymbol;

    // Create an array with all balances
    mapping (address => uint256) public balanceOf;
    

    constructor (uint256 initialSupply, string _tokenName, string _tokenSymbol) public {

        // Give the initial supply to the contract owner
        balanceOf[owner] = initialSupply;

        // Set the token name
        tokenName = _tokenName;

        // Set the token symbol
        tokenSymbol = _tokenSymbol;

    }

}

