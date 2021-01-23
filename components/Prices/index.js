import React, { useState, useEffect } from 'react'
import CoinGecko from 'coingecko-api';

const CoinGeckoClient = new CoinGecko();

const Prices = () => {
  const [bchPerBtc, setBchPerBtc] = useState(0)
  const [mBchPerUsd, setMBchPerUsd] = useState(0)
  const [mBchPerGbp, setMBchPerGbp] = useState(0)
  const [mBchPerEur, setMBchPerEur] = useState(0)
  const [mBchPerCny, setMBchPerCny] = useState(0)
  const [mBchPerAud, setMBchPerAud] = useState(0)
  
  useEffect(() => {
    const grabData = async () => {
      const data = await CoinGeckoClient.coins.fetch('bitcoin-cash', {});

      const bchBuysBtc = data?.data?.market_data?.current_price?.btc
      const calcBtcBuysBch = Number(1 / bchBuysBtc).toFixed(3)
      setBchPerBtc(calcBtcBuysBch)

      const usdPrice = data?.data?.market_data?.current_price?.usd
      const bchPerUsd = 1 / usdPrice
      const calcMBchPerUsd = Number(bchPerUsd * 1000).toFixed(3)
      setMBchPerUsd(calcMBchPerUsd)

      const gbpPrice = data?.data?.market_data?.current_price?.gbp
      const bchPerGbp = 1 / gbpPrice
      const calcMBchPerGbp = Number(bchPerGbp * 1000).toFixed(3)
      setMBchPerGbp(calcMBchPerGbp)

      const eurPrice = data?.data?.market_data?.current_price?.eur
      const bchPerEur = 1 / eurPrice
      const calcMBchPerEur = Number(bchPerEur * 1000).toFixed(3)
      setMBchPerEur(calcMBchPerEur)

      const cnyPrice = data?.data?.market_data?.current_price?.cny
      const bchPerCny = 1 / cnyPrice
      const calcMBchPerCny = Number(bchPerCny * 1000).toFixed(3)
      setMBchPerCny(calcMBchPerCny)

      const audPrice = data?.data?.market_data?.current_price?.aud
      const bchPerAud = 1 / audPrice
      const calcMBchPerAud = Number(bchPerAud * 1000).toFixed(3)
      setMBchPerAud(calcMBchPerAud)
    }

    grabData()
  }, [])

  return (
    <div>
      <h2>Prices</h2>
      <p>1 BTC buys {bchPerBtc} BCH</p>
      <p>1 USD buys {mBchPerUsd} mBCH</p>
      <p>1 GBP buys {mBchPerGbp} mBCH</p>
      <p>1 EUR buys {mBchPerEur} mBCH</p>
      <p>1 CNY buys {mBchPerCny} mBCH</p>
      <p>1 AUD buys {mBchPerAud} mBCH</p>
      <p>1 mBCH (milli Bitcoin Cash) = 0.001 BCH</p>
    </div>
  )
}

export default Prices