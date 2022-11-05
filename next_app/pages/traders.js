
import Layout from "/components/Layout";
import TradersTables from "/components/TradersTable"
import CardComponent from '/components/CardComponent'
import HeaderComponent from '/components/HeaderComponent'
import { useState } from "react";
import {ethers} from 'ethers'
import ABI from '../ABI.json'


export default function Home(props) {
  const contractAddress = '0x0a1A174e9E96b29b0c9B33a8C74C077AAB7cB204'
  const [contract, setContract] = useState(null)
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [name, setName] = useState(null)
  const [quantity, setQuantity] = useState(null)
  const [price, setPrice] = useState(0)
  const [gScore, setgScore] = useState(null)
  const [nameReq, setNameReq] = useState(null)
  const [quantityReq, setQuantityReq] = useState(null)
  const [priceReq, setPriceReq] = useState(0)
  const [gScoreReq, setgScoreReq] = useState(null)
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

  return (
    <Layout >
      < HeaderComponent />
      <button className="button-connect-metamask" onClick={connectWalletHandler}>Connect With Metamask</button>
      <div className=""  style={{padding:'14px'}} >
        {/* <TradersTables /> */}
        <CardComponent />
        {props.cont}
      </div>
      <style jsx>{`
                .content_container {
                  display: flex;
                  flex-direction: column;
                  height: 92vh;
                }
                .title {
                  font-size: 2vh;
                }
                .count {
                  font-size: 2.5vh;
                }
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
      `}</style>
    </Layout>
  );
}
