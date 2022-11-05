import React from 'react'
import { useState } from 'react'
import {ethers} from 'ethers'
import ABI from '../ABI.json'

function header(props) {
//   const [contract, setContract] = useState(null)
//   const [defaultAccount, setDefaultAccount] = useState(null)
//   const contractAddress = '0x1Cb6ff2BE115f6Ca03DD3C3dFc3c3AB55EfB98b8'

//   const connectWalletHandler = (event) => {
//     // first we use metamask to sign in
//     if (window.ethereum) {
//         window.ethereum.request({ method: 'eth_requestAccounts' })
//             .then(result => {
//                 setDefaultAccount(result[0])
//                 console.log('res is', result);
//             })
//     } else {
//         console.log('install metamask');
//         return
//     }
//     // second we fetch contract for signed in user
//     let provider = new ethers.providers.Web3Provider(window.ethereum)
//     let signer = provider.getSigner()
//     let contract = new ethers.Contract(contractAddress, ABI, signer)
//     setContract(contract)
//     props.onChange(contract);
//     console.log('contract is:', contract);
// }

  return (
    <div>
      <div className='header-h1' >
      {/* <button onClick={connectWalletHandler}>Connect Wallet</button>
      {contract ? contract.address : '' } */}
      </div>

      <style jsx>{`
        .header-h1{
       
          background-color: #efeaea ;
          height: 80px;
          
        }
    
    `}

      </style>
    </div>

  )
}

export default header
