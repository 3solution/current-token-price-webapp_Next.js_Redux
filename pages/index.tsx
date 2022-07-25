import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
import axios from "axios";

import Mainlayout from "../modules/Layouts/Mainlayout";
import PriceType from "../components/PriceType";
import Timezone from "../components/Timezone";
import { setTokenInfo } from "../store/slices/tokenSlice";
import store from "../store";

import styles from "./styles.module.scss";

const Home = () => {
  // const [tokenInfo, setTokenInfo] = useState<any>({});
  const token = useSelector((state: any) => state.token);
  const dispatch = useDispatch();

  const getTokenInfo = () => {
    axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`).then((res) => {
      dispatch(setTokenInfo(res.data));
    });
  };

  useEffect(() => {
    getTokenInfo();
  }, []);

  console.log("tokenInfo: ", token.tokenInfo);
  return (
    <>
      <p className={styles.title}>Token Name: {token.tokenInfo?.chartName}</p>
      <hr className={styles.line} />
      <p className={styles.title}>Updated Time</p>
      <div className={styles.priceWrapper}>
        {token.tokenInfo?.time !== undefined &&
          Object.keys(token.tokenInfo?.time).map((key: string) => (
            <Timezone key={key} title={key} time={token.tokenInfo?.time[key]} />
          ))}
      </div>
      <hr className={styles.line} />
      <p className={styles.title}>Price</p>
      <div className={styles.priceWrapper}>
        {token.tokenInfo?.bpi !== undefined &&
          Object.keys(token.tokenInfo?.bpi).map((key: string) => (
            <PriceType
              key={key}
              code={token.tokenInfo?.bpi[key].code}
              symbol={token.tokenInfo?.bpi[key].symbol}
              rate={token.tokenInfo?.bpi[key].rate}
              description={token.tokenInfo?.bpi[key].description}
            />
          ))}
      </div>
      <hr className={styles.line} />
      <p className={styles.title}>Disclaimer</p>
      <p className={styles.description}>{token.tokenInfo?.disclaimer}</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={getTokenInfo}>
          Refresh
        </button>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Provider store={store}>
      <Mainlayout description="todo: description" title={page.props.title} url="todo: url">
        {page}
      </Mainlayout>
    </Provider>
  );
};

export default Home;
