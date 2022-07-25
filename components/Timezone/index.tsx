import React from "react";

import styles from "./styles.module.scss";

type Props = {
  title: string;
  time: string;
};

const Timezone: React.FC<Props> = ({ title, time }) => {
  return (
    <div>
      <p className={styles.title}>{title}</p>
      <p className={styles.time}>{time}</p>
    </div>
  );
};

export default Timezone;
