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
        address companyAddress;
        uint gScore;
        // bool hasBeenRequested;
        // bool hasBeenReceived;
        // bool hasBeenTransported;
    }

    Freight[] public requestedFreight;
    Freight[] public transportedFreight;


    function doFreightRequest(string memory name, uint quantity, uint price, uint gScore) external {
        uint id = requestedFreight.length;
        address companyAddress = msg.sender;
        requestedFreight.push(Freight(id, name, quantity, price, companyAddress, gScore));
    }

    function doFreightTransport(string memory name, uint quantity, uint price, uint gScore) external {
        uint id = transportedFreight.length;
        address  companyAddress = msg.sender;
        transportedFreight.push(Freight(id, name, quantity, price, companyAddress, gScore));
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

    function getAllRequestedFreightByCompanyAdress(address companyAddress) external view returns(Freight[]memory){
        Freight[] memory temporaray = new Freight[](requestedFreight.length);
        uint counter = 0;
        for(uint i = 0; i < requestedFreight.length; i++){
            if(requestedFreight[i].companyAddress == companyAddress){
                temporaray[counter] = requestedFreight[i];
                counter++;
            }
        }
        Freight[] memory result = new Freight[](counter);
        for(uint j = 0; j < counter ; j++){
            result[j] = temporaray[j];
        }
        return result;
    }

        function getAllTransportedFreightByCompanyAdress(address companyAddress) external view returns(Freight[]memory){
        Freight[] memory temporaray = new Freight[](transportedFreight.length);
        uint counter = 0;
        for(uint i = 0; i < transportedFreight.length; i++){
            if(transportedFreight[i].companyAddress == companyAddress){
                temporaray[counter] = transportedFreight[i];
                counter++;
            }
        }
        Freight[] memory result = new Freight[](counter);
        for(uint j = 0; j < counter ; j++){
            result[j] = temporaray[j];
        }
        return result;
    }
}