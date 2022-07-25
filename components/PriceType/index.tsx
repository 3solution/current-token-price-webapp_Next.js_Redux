import React from "react";

import styles from "./styles.module.scss";

type Props = {
  code: string;
  symbol: string;
  rate: string;
  description: string;
};

const PriceType: React.FC<Props> = ({ code, symbol, rate, description }) => {
  return (
    <div>
      <p className={styles.code}>{code}</p>
      <p className={styles.symbol}>description: {description}</p>
      <p className={styles.symbol}>symbol: {symbol}</p>
      <p className={styles.symbol}>rate: {rate}</p>
    </div>
  );
};

export default PriceType;
