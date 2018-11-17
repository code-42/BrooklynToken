// parts of this script courtesy of Nick's steemit tutorial @hardlydifficult
// https://steemit.com/tutorial/@hardlydifficult/ethereum-dapp-tutorial-part-2-of-3-web-front-end-with-metamask-integration

import Web3 from "web3";

// const contract_address="0xFc79C5CEd587661EF73C98aF855Ee47962eA91db";
// const contract_address="0xA874BA31E700f487d816cd28D0285aff62b738A1";
const contract_address="0xD607b7d409713659182AEa7367ab84BaB63EA38D";
const abi = [{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenSymbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

let contract;

window.addEventListener('load', () => {
    if(typeof(web3) === 'undefined') {
      return console.log("Metamask is not installed.");
    }
    contract = web3.eth.contract(abi).at(contract_address);

    // read member variables values from constructor and display in web page 
    // contract.methods.tokenName().call((error, result) => {
        contract.tokenName.call((error, result) => {
        if(error) {
            return console.log(error);
        }
        $('#tokenName').text(result);
    });

    // contract.methods.tokenSymbol().call((error, result) => {
        contract.tokenSymbol.call((error, result) => {
        if(error) {
            return console.log(error);
        }
        $('#tokenSymbol').text(result);
    });

    // contract.methods._totalSupply().call((error, result) => {
        contract._totalSupply.call((error, result) => {
        if(error) {
            return console.log(error);
        }
        $('#_totalSupply').text(result);
    });

});
