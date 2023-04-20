import "./App.css";
import Header from "./components/Header/Header";
import { Select, Input } from "antd";
import { selectOptions } from "./utils/selectOptions";
import { useGetCurrencyData } from "./hooks/useGetCurrencyData";
import { useCurrenciesConverting } from "./hooks/useCurrenciesConverting";

function App() {
  const [currencyData] = useGetCurrencyData();

  const {
    amount1,
    amount2,
    selectedCurrency1,
    selectedCurrency2,
    hadnleFirstAmountChange,
    hadnleSecondAmountChange,
    handleFirstSelectedCurrencyChange,
    handleSecondSelectedCurrencyChange,
  } = useCurrenciesConverting();

  return (
    <div className="App">
      <div className="container">
        <Header currencyData={currencyData} />
        <div className="containerRow">
          <div className="containerItem">
            <Input
              placeholder="Введіть сумму..."
              onChange={(ev) => hadnleFirstAmountChange(ev.target.value)}
              type="number"
              value={amount1}
              className="myInput"
              disabled={!selectedCurrency1 || !selectedCurrency2}
              title="Спочатку оберіть валюту"
            />
            <Select
              defaultValue="Оберіть валюту"
              style={{
                width: 150,
                marginTop: "15px",
              }}
              onChange={handleFirstSelectedCurrencyChange}
              options={selectOptions(currencyData)}
              className="mySelect"
            />
          </div>
          <div className="containerItem">
            <Input
              placeholder="Введіть сумму..."
              value={amount2}
              onChange={(ev) => hadnleSecondAmountChange(ev.target.value)}
              type="number"
              className="myInput"
              disabled={!selectedCurrency2 || !selectedCurrency1}
              title="Спочатку оберіть валюту"
            />
            <Select
              defaultValue="Оберіть валюту"
              style={{
                width: 150,
                marginTop: "15px",
              }}
              onChange={handleSecondSelectedCurrencyChange}
              options={selectOptions(currencyData)}
              className="mySelect"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
