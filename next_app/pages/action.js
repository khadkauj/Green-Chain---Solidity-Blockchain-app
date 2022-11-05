
import Layout from "/components/Layout";
import { makeStyles } from '@material-ui/core';
import { TextField } from '@mui/material';
import Button from '@material-ui/core/Button';
import { useState } from "react";

import { ethers } from 'ethers'
import ABI from '../ABI.json'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

export default function Home(props) {
  const classes = useStyles();

  // create state variables for each input
  const contractAddress = '0x1Cb6ff2BE115f6Ca03DD3C3dFc3c3AB55EfB98b8'
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

    const doFreightRequest = async (e) => {
        e.preventDefault()
        await contract.doFreightRequest(name, quantity, price, gScore)
    }
    const doFreightTransport = async (e) => {
        e.preventDefault()
        await contract.doFreightTransport(nameReq, quantityReq, priceReq, gScoreReq)
    }
    const getAllRequestedFreight = async (e) => {
        e.preventDefault()
        const result = await contract.getAllRequestedFreight()
        console.log(result);
        setListOfRequestedFreight(result)
    }
    const getAllTransportedFreight = async (e) => {
        e.preventDefault()
        const result = await contract.getAllTransportedFreight()
        console.log(result);
        setListOfTransportedFreight(result)
    }

  return (
    <Layout >
      {/* <Navbar /> */}
      <button onClick={connectWalletHandler}>Connect Wallet</button>
      <div className="form-container">
      <form className={classes.root} onSubmit={doFreightRequest}>
        <h1>Container Request</h1>
        <TextField
          label="Item Name"
          variant="filled"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          label="Quantity"
          variant="filled"
          required
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />
        <TextField
          label="Price"
          variant="filled"
          type="number"
          required
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <TextField
          label="G-Score"
          variant="filled"
          type="number"
          required
          value={gScore}
          onChange={e => setgScore(e.target.value)}
        />
        <div>
          <Button type="submit" variant="contained" color="primary">
            Request
          </Button>
        </div>
      </form>
      <form className={classes.root} onSubmit={doFreightTransport}>
        <h1>Container Transport</h1>
        <TextField
          label="Item Name"
          variant="filled"
          required
          value={nameReq}
          onChange={e => setNameReq(e.target.value)}
        />
        <TextField
          label="Quantity"
          variant="filled"
          required
          value={quantityReq}
          onChange={e => setQuantityReq(e.target.value)}
        />
        <TextField
          label="Price"
          variant="filled"
          type="number"
          required
          value={priceReq}
          onChange={e => setPriceReq(e.target.value)}
        />
        <TextField
          label="G-Score"
          variant="filled"
          type="number"
          required
          value={gScoreReq}
          onChange={e => setgScoreReq(e.target.value)}
        />
        <div>
          <Button type="submit" variant="contained" color="primary">
            Transport
          </Button>
        </div>
      </form>
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
                .form-container{
                  display: grid;
                  margin-top: 10%;
                  grid-template-columns: repeat(2, 1fr);

                }
      `}</style>
    </Layout>
  );
}
