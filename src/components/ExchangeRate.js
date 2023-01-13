import { useEffect, useState } from "react";
import Axios from "axios";


const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}

      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};



export default function ExchangeRate() {

  const [data, setData] = useState();
  const [coinOne, setCoinOne] = useState("btc");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Axios.get("https://api.coingecko.com/api/v3/exchange_rates").then((res) => {
      setData(res.data.rates);
      if (res) {
        setLoaded(true)
      }
    });

  }, []);

  const [coinTwo, setCoinTwo] = useState("inr");
  const [coinOneAmount, setCoinOneAmount] = useState(0);
  const [coinOneER, setCoinOneER] = useState("");
  const [coinTwoER, setCoinTwoER] = useState("");
  const [price, setPrice] = useState(0);

  const handleCoinOneChange = (event) => {
    setCoinOne(event.target.value);
  };

  const handleCoinTwoChange = (event) => {
    setCoinTwo(event.target.value);
  };

  const handleCoinOneAmountChange = (event) => {
    setCoinOneAmount(event.target.value);
  };

  const ERfunction = () => {

    for (const i in data) {
      const oxo = data[i];

      if (i === coinOne) {
        for (const j in oxo) {
          if (j === "value") {
            //console.log(oxo[j]);
            setCoinOneER(oxo[j]);
          }
        }
      }
    }
    for (const i in data) {
      const oxo = data[i];

      if (i === coinTwo) {
        for (const j in oxo) {
          if (j === "value") {
            setCoinTwoER(oxo[j]);
          }
        }
      }
    }
    let ER = coinTwoER / coinOneER;

    let price = ER * coinOneAmount;

    setPrice(price);
  };

  const [array, setArray] = useState([]);

  useEffect(() => {
    dropDownData()
  }, [loaded]);


  const dropDownData = () => {
    let arr = [];

    for (const i in data) {
      const oxo = data[i];
      for (const j in oxo) {
        if (j === "name") {
          arr.push({ label: oxo[j], value: i });
        }
      }
    }
    setArray(arr);
  };



  return (
    <div>

      <div>
        <h1> Exchange Coins </h1>
        <div>selling Currency </div>
        <div>
          <Dropdown
            label=" "
            options={array}
            value={coinOne}
            onChange={handleCoinOneChange}
          />
        </div>

        <div>
          <input
            type="number"
            name=""
            id=""
            value={coinOneAmount}
            onChange={handleCoinOneAmountChange}
            placeholder="enter amount"
          />
        </div>

        <div>Buying Currency </div>
        <div>
          <Dropdown
            label=" "
            options={array}
            value={coinTwo}
            onChange={handleCoinTwoChange}
          />
        </div>
        <div>
          {coinOneAmount}
          {coinOne}={price}
          {coinTwo}
        </div>
        <div>
          <button type="submit" onClick={ERfunction}>
            Exchange
          </button>
        </div>
      </div>
    </div>
  )
}
