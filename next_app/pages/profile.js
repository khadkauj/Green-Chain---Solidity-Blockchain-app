
import Layout from "/components/Layout";
import RequestedTable from "/components/RequestedTable"
import TransportedTable from "/components/TransportedTable"
import HeaderComponent from '/components/HeaderComponent'
import { useState } from "react";
import { ethers } from 'ethers'
import ABI from '../ABI.json'

export default function Home(props) {
  const contractAddress = '0x0a1A174e9E96b29b0c9B33a8C74C077AAB7cB204'
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [contract, setContract] = useState(null)
  const [name, setName] = useState(null)
  const [quantity, setQuantity] = useState(null)
  const [price, setPrice] = useState(0)
  const [gScore, setgScore] = useState(null)
  const [nameReq, setNameReq] = useState(null)
  const [quantityReq, setQuantityReq] = useState(null)
  const [priceReq, setPriceReq] = useState(0)
  const [gScoreReq, setgScoreReq] = useState(null)
  const [listOfRequestedFreight, setListOfRequestedFreight] = useState([])
  const [listOfTransportedFreight, setListOfTransportedFreight] = useState([])

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(firstName, lastName, email, password);
    // handleClose();
  }



  // functions
  const connectWalletHandler = (event) => {
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
    props.onChange(contract);
    console.log('contract is:', contract);
  }

  // console.log(props , "props from overview.js")
  return (
    <Layout >
      < HeaderComponent />
      {!defaultAccount ?
        <button className="button-connect-metamask" onClick={connectWalletHandler}>Connect With Metamask</button> :
        <span className="button-connect-metamask">{defaultAccount.slice(0, 6)}...{defaultAccount.slice(defaultAccount.length - 4, defaultAccount.length)}</span>
        }

      <div className="content_container">
        <div className="profile_container">
          <h1 className="title">All Your Transactions</h1>
          <div className="requested_goods">
            {/* <div className="delivery_title">Requested Goods</div> */}
            <RequestedTable />
          </div> < br />

          <div className="transported_goods">
            {/* <div className="delivery_title"> Transported Goods</div> */}
            <TransportedTable/>
          </div>
        </div>
      </div>
      <style jsx>{`
                .button-connect-metamask{
                  cursor: pointer;
                  position: absolute;
                  right: 24px;
                  top: 14px;
                  border-radius: 100px;
                  border: 1px solid #7e8489;
                  display: flex;
                  place-items: center;
                  padding: 8px;
                  font-size: initial;
                }
                .title{
                  text-align: center;
                }
                .profile_container{
                  padding: 24px;
                }
      `}</style>
    </Layout>
  );
}
