import axios from "axios";
import { useEffect, useState } from "react";

export const useGetCurrencyData = () => {
  const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
      );
      const data = response.data;
      const usd = data.find((rate) => rate.txt === "Долар США");
      const eur = data.find((rate) => rate.txt === "Євро");
      setCurrencyData([usd, eur]);
    };
    fetchData();
  }, []);
  return [currencyData, setCurrencyData];
};
