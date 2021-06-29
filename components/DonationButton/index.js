import { PayButton } from "@paybutton/react";

const DonationButton = () => {
  const mySuccessFunction = () => {
    console.log("Success!");
  };

  // Dark GREY: #3a3a3a
  const BCH_GREEN = "#84cb55";
  const to = "bitcoincash:qqq24rak0cea37qcnfuj2qvt5sdlpp8x9gnjunmqvn";
  const amount = 5;
  const currency = "USD";
  const text = "Donate";
  const hoverText = "Keeps the content rolling!";
  const theme = {
    palette: {
      primary: BCH_GREEN,
      secondary: "#E4E4E4",
      tertiary: "#333333",
    },
  };
  const onSuccess = mySuccessFunction();

  return (
    <PayButton
      to={to}
      amount={amount}
      currency={currency}
      text={text}
      hoverText={hoverText}
      theme={theme}
      onSuccess={onSuccess}
    />
  );
};

export default DonationButton;
