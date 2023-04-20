export const selectOptions = (currencyData) => {
  const currencyOptions = currencyData.map((rate) => ({
    value: rate.rate,
    label: rate.cc,
  }));
    
    return [{ value: 1, label: "UAH" }, ...currencyOptions];
    
};
