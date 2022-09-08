import * as React from "react";
import Select from "./component/Select";
import axios from "axios";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import Input from "./component/Input";
import CachedIcon from "@mui/icons-material/Cached";
import "./App.css";
const axiosInstance = axios.create({
  baseURL: "https://api.apilayer.com/exchangerates_data/",
  headers: {
    apikey: "JBkTPffpowJs8VTkiZXp68k07nWH68OO",
  },
});

function App() {
  const [currencyList, setCurrencyList] = React.useState([]);

  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [rates, setRates] = React.useState(null);
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    axiosInstance.get("/symbols").then((data) => {
      const response = Object.keys(data?.data?.symbols);
      setCurrencyList(response);
    });
  }, []);

  const handleConvert = (from, to) => {
    setRates(null);
    setLoading(true);

    axiosInstance
      .get("/latest", {
        params: {
          symbols: `USD,EUR,TRY,RUB,${to}`,
          base: from,
        },
      })
      .then((data) => {
        const response = data?.data?.rates;
        setRates(response);
        setLoading(false);
      });
  };

  const handleChangeCurrency = () => {
    let tempFrom = from;
    let tempTo = to;
    setTo(tempFrom);
    setFrom(tempTo);
    handleConvert(tempTo, tempFrom);
  };

  return (
    <div className="container">
      <div className="currency-inner">
        <div className="row align-items-center justify-content-center mb-4">
          <div className="col-4">
            <Select
              id="currencyFrom"
              value={from}
              onChange={setFrom}
              items={currencyList}
            />
          </div>
          <div className="col-1">
            <button className="w-100" onClick={handleChangeCurrency}>
              <CompareArrowsIcon />
            </button>
          </div>
          <div className="col-4">
            <Select
              id="currencyTo"
              value={to}
              onChange={setTo}
              items={currencyList}
            />
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-9">
            <div className="input-inner">
              <div className="p-2">Amount</div>
              <div className="position-relative input">
                <Input
                  id={"amount"}
                  value={amount}
                  onChange={setAmount}
                  type="text"
                />
                <button onClick={() => handleConvert(from, to)}>
                  <CachedIcon />
                </button>
              </div>
              {rates && (
                <div className="p-2 mt-2">
                  {+(amount * rates?.[to]).toFixed(2)} {to}
                </div>
              )}
            </div>
            {isLoading && <p>Loading..</p>}

            {rates && (
              <>
                <div>
                  {Object.keys(rates)
                    .filter((c) => c !== to)
                    ?.map((c) => (
                      <div key={c} className="d-flex justify-content-between mt-3 list-inner">
                        <div>
                        {+(amount * rates?.[c]).toFixed(2)} 
                        </div>
                        <div>
                        {c}
                        </div>
                          
                      </div>
                    ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
