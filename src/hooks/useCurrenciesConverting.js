import { useState } from "react";
import { format } from "../utils/format";

export const useCurrenciesConverting = () => {
  const [amount1, setAmount1] = useState("");
  const [amount2, setAmount2] = useState("");
  const [selectedCurrency1, setSelectedCurrency1] = useState("");
  const [selectedCurrency2, setSelectedCurrency2] = useState("");

  const hadnleFirstAmountChange = (amount1) => {
    amount1 === ""
      ? setAmount2("")
      : setAmount2(format((amount1 * selectedCurrency1) / selectedCurrency2));

    setAmount1(amount1);
  };

  const hadnleSecondAmountChange = (amount2) => {
    amount2 === ""
      ? setAmount1("")
      : setAmount1(format((amount2 * selectedCurrency2) / selectedCurrency1));
    setAmount2(amount2);
  };

  const handleFirstSelectedCurrencyChange = (selectedCurrency1) => {
    amount1 === ""
      ? setAmount2("")
      : setAmount2(format((amount1 * selectedCurrency1) / selectedCurrency2));
    setSelectedCurrency1(selectedCurrency1);
  };

  const handleSecondSelectedCurrencyChange = (selectedCurrency2) => {
    amount2 === ""
      ? setAmount1("")
      : setAmount1(format((amount2 * selectedCurrency2) / selectedCurrency1));
    setSelectedCurrency2(selectedCurrency2);
  };

  return {
    amount1,
    amount2,
    selectedCurrency1,
    selectedCurrency2,
    hadnleFirstAmountChange,
    hadnleSecondAmountChange,
    handleFirstSelectedCurrencyChange,
    handleSecondSelectedCurrencyChange,
  };
};
