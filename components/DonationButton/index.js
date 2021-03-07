import { PayButton } from '@paybutton/react'

const DonationButton = () => {
  const mySuccessFunction = () => {
    console.log("Success!")
  }

  const to = 'bitcoincash:qqq24rak0cea37qcnfuj2qvt5sdlpp8x9gnjunmqvn'
  const amount = 5
  const currency = 'USD'
  const text = 'Donate'
  const hoverText = 'Keeps the content rolling!'
  const theme = {
    palette: {
      primary: '#B94283',
      secondary: '#FFFFFF',
      tertiary: '#333333'
    }
  }
  const onSuccess = mySuccessFunction()

  return <PayButton
    to={to}
    amount={amount}
    currency={currency}
    text={text}
    hoverText={hoverText}
    theme={theme}
    onSuccess={onSuccess}
  />
}

export default DonationButton