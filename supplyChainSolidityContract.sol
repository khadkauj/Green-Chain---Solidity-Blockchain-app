// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract supplyChain{

    address public owner;


    constructor(){
        owner = msg.sender;
    }

    struct Freight{
        uint id;
        string name;
        uint quantity;
        uint price;
        // bool hasBeenRequested;
        // bool hasBeenReceived;
        // bool hasBeenTransported;
    }

    Freight[] public requestedFreight;
    Freight[] public transportedFreight;


    function doFreightRequest(string memory name, uint quantity, uint price) external {
        uint id = requestedFreight.length;
        requestedFreight.push(Freight(id, name, quantity, price));
    }

    function doFreightTransport(string memory name, uint quantity, uint price) external {
        uint id = transportedFreight.length;
        transportedFreight.push(Freight(id, name, quantity, price));
    }
    
    // function markFreightAsReceived(uint id)external {
    //     requestedFreight[id].hasBeenReceived = true;
    // }

    function getAllRequestedFreight() external view returns(Freight[] memory){
        return requestedFreight;
    }

    function getAllTransportedFreight() external view returns(Freight[] memory){
        return transportedFreight;
    }

}