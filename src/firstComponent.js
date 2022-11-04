import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import ABI from './ABI.json'
import './firstComponent.css'

function FirstComponent() {

    const contractAddress = '0xC23d1970bc6D47E2d11bEd5FE4365885B9cAfd99'  

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [contract, setContract] = useState(null)
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)
    const [listOfRequestedFreight, setListOfRequestedFreight] = useState([])
    const [listOfTransportedFreight, setListOfTransportedFreight] = useState([])

    // functions
    const connectWalletHandler = () => {
        // first we use metamask to sign in
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {
                    setDefaultAccount(result[0])
                    console.log('res is', result);
                })
        } else {
            console.log('install metamask');
            return
        }
        // second we fetch contract for signed in user
        let provider = new ethers.providers.Web3Provider(window.ethereum)
        let signer = provider.getSigner()
        let contract = new ethers.Contract(contractAddress, ABI, signer)
        setContract(contract)
        console.log('contract is:', contract);
    }

    const doFreightRequest = async (e) => {
        e.preventDefault()
        await contract.doFreightRequest(name, quantity, price)
    }
    const doFreightTransport = async (e) => {
        e.preventDefault()
        await contract.doFreightTransport(name, quantity, price)
    }
    const getAllRequestedFreight = async (e) => {
        e.preventDefault()
        const result = await contract.getAllRequestedFreight()
        console.log(result); 
        setListOfRequestedFreight(result)
    }
    const getAllTransportedFreight = async(e) => {
        e.preventDefault()
        const result = await contract.getAllTransportedFreight()
        console.log(result);
        setListOfTransportedFreight(result)
    }

    return (
        <div>
            <div>
                <h4> {"Get/Set Contract interaction"} </h4>
                <button onClick={connectWalletHandler}>Connect Wallet</button>
                <div>
                    <h3>Address: {defaultAccount}</h3>
                </div>
            </div>

            <div className='freight' >
                <div>
                    <h3>Freight Request</h3>
                    <form onSubmit={doFreightRequest} >
                        <label>Name</label> <br />
                        <input id='name' value={name} onChange={e => setName(e.target.value)} /><br />
                        <label>quantity</label><br />
                        <input id='quantity' value={quantity} onChange={e => setQuantity(e.target.value)} /><br />
                        <label>price</label><br />
                        <input id='price' value={price} onChange={e => setPrice(e.target.value)} /><br />
                        <br />
                        <button type='submit' >Submit</button>
                    </form> < br/>< br/> 
                    <div><button onClick={getAllRequestedFreight} >Get All Freight Requested</button>  </div><br /> 
                    {listOfRequestedFreight.map(item => (

                       < span key={parseInt(item.id._hex, 16)}>Id:{parseInt(item.id._hex, 16)}, Name:{item.name}, Price: {parseInt(item.id._hex, 16)}, Quantity:{parseInt(item.id._hex, 16)}  <br /></span> 
                    ))}
                </div>
                <div>
                    <h3>Freight Transport</h3>
                    <form onSubmit={doFreightTransport} >
                    <label>Name</label> <br />
                    <input id='name' value={name} onChange={e => setName(e.target.value)} /><br />
                    <label>quantity</label><br />
                    <input id='quantity' value={quantity} onChange={e => setQuantity(e.target.value)} /><br />
                    <label>price</label><br />
                    <input id='price' value={price} onChange={e => setPrice(e.target.value)} />
                    <br /> <br />
                    <button type='submit' >Submit</button>
                </form> < br/>< br/> 
                <div><button onClick={getAllTransportedFreight} >Get All Freight Transported</button>  </div>
</div>
            </div>

        </div>
    )
}

export default FirstComponent
