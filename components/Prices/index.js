import React from 'react'
import CoinGecko from 'coingecko-api';

const CoinGeckoClient = new CoinGecko();

const Prices = () => {
  var func = async () => {
    let data = await CoinGeckoClient.ping();
    console.log('data: ', data)
  };


  return (
    <h2>Prices</h2>
  )
}

export default Prices