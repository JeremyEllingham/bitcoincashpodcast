import React, { useState, useEffect } from 'react'
import CoinGecko from 'coingecko-api';

const CoinGeckoClient = new CoinGecko();

const Prices = () => {
  const [mBchPerUsd, setMBchPerUsd] = useState(0)
  const [mBchPerGbp, setMBchPerGbp] = useState(0)
  
  useEffect(() => {
    const grabData = async () => {
      const data = await CoinGeckoClient.coins.fetch('bitcoin-cash', {});

      const usdPrice = data?.data?.market_data?.current_price?.usd
      const bchPerUsd = 1 / usdPrice
      const calcMBchPerUsd = Number(bchPerUsd * 1000).toFixed(3)
      setMBchPerUsd(calcMBchPerUsd)

      const gbpPrice = data?.data?.market_data?.current_price?.gbp
      const bchPerGbp = 1 / gbpPrice
      const calcMBchPerGbp = Number(bchPerGbp * 1000).toFixed(3)
      setMBchPerGbp(calcMBchPerGbp)
    }

    grabData()
  }, [])

  return (
    <div>
      <h2>Prices</h2>
      <p>1 mBCH (milli Bitcoin Cash) = 0.001 BCH</p>
      <p>1 USD buys {mBchPerUsd}mBCH</p>
      <p>1 GBP buys {mBchPerGbp}mBCH</p>
      <p>1 EUR buys {mBchPerUsd}mBCH</p>
      <p>1 CNY buys {mBchPerUsd}mBCH</p>
      <p>1 AUD buys {mBchPerUsd}mBCH</p>
    </div>
  )
}

export default Prices