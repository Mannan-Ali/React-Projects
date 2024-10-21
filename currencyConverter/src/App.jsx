import { useState } from "react";
import "./App.css";
import useCurrencyInfo from "./customHooks/currencyInfo";
import InputBox from "./components/InputBox";

function App() {
  const [amt, setAmt] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedCurrency, setconvertedCurrency] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmt(convertedCurrency);
    setconvertedCurrency(amt);
  };
  console.log(currencyInfo)
  const value = currencyInfo ? currencyInfo[to]["value"] : null;

  const convertFunc = () => {
    setconvertedCurrency(amt * value);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${"https://www.transparenttextures.com/patterns/padded-light.png"}')`,
        backgroundSize: "200px", // Adjusts the size of the image
        backgroundRepeat: "repeat", // Ensures the image repeats if it's too small
    }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertFunc();
            }}
          >
            <div className="w-full mb-1">
              <InputBox label="From" amount={amt} onAmountChange={(amount)=>{setAmt(amount)}} selectCurrency={from} onCurrencyChange={(currency)=>{ setFrom(currency)}} currencyOptions={options} />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label="To"  amount={convertedCurrency}   selectCurrency={to} onCurrencyChange={(currency)=>{ setTo(currency)}} currencyOptions={options}/>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from} to  {to}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
