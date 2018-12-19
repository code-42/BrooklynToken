// Athor: Edward Dupre 
// In partial completion of Harvard CS50x
// Dec 2018

// adapted from https://www.ethereum.org/token
// by and with the help of this awesome introductory tutorial 
// https://codesnippet.io/creating-your-own-cryptocurrency/
// produced by my good friend and CareerDevs colleague
// Tim Wheeler @ TimWheeler.com  - props where props due

// Set the solidity compiler version
pragma solidity ^0.4.25;

contract BrooklynToken {
    
    // Set the contract owner
    address public owner = msg.sender;

    // Initialize tokenName
    string public tokenName;

    // Initialize tokenSymbol
    string public tokenSymbol;
    
    // Initialize _totalSupply    
    uint public initialSupply;

    // Create an array with all balances
    mapping (address => uint256) public balanceOf;

    
    // Initializes contract with initial supply tokens to the creator of the contract
    constructor(uint256 _initialSupply, string _tokenName, string _tokenSymbol) public {
        tokenName = _tokenName;
        tokenSymbol = _tokenSymbol;
        initialSupply = _initialSupply;

        // fill up with fake tokens
        tokenName = "BrooklynToken";
        tokenSymbol = "BKNTKN";
        initialSupply = 1000;
        
        // Give the initial supply to the contract owner
        balanceOf[owner] = initialSupply;
    }
    
    // Enable ability to transfer tokens
    function transfer(address _to, uint256 _value) public returns (bool success) {

        // Check if the sender has enough
        require(balanceOf[msg.sender] >= _value, "Error, balance of sender must be greater than amount to transfer");

        // Check for integer overflows
        require(balanceOf[_to] + _value >= balanceOf[_to], "Error, integer overflow");

        // Subtract value from the sender
        balanceOf[msg.sender] -= _value;

        // Add value to recipient
        balanceOf[_to] += _value;

        // Return true if transfer is successful
        return true;

    }
}