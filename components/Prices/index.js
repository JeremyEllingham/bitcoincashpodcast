import React, { useEffect } from 'react'
import CoinGecko from 'coingecko-api';

const CoinGeckoClient = new CoinGecko();

const Prices = () => {
  useEffect(() => {
    const grabData = async () => {
      const data = await CoinGeckoClient.ping();
      console.log('data: ', data)
    }

    grabData()
  }, [])

  return (
    <h2>Prices</h2>
  )
}

export default Prices