import styles from "./Header.module.css";

const Header = ({ currencyData }) => {
  return (
    <div className={styles.headerWrapper}>
      <h2>Конвертер валют</h2>
      <div className={styles.header}>
        <div className={styles.date}>
          <h3>Курс на поточну дату: {currencyData[0]?.exchangedate}</h3>
        </div>
        {currencyData.map((currency) => (
          <div key={currency.cc} className={styles.currency}>
            <h3>
              {currency.txt}: {currency.rate.toFixed(2)} грн.
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
