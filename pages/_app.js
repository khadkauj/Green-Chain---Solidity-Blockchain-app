import { useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [cont, setCont] = useState('no contract')

  function handleChange(newValue) {
    setCont(newValue);
  }

  return <Component {...pageProps} value={cont} onChange={handleChange} />
}

export default MyApp
