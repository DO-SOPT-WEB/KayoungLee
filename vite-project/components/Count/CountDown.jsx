import { useEffect, useState } from "react";
import * as C from "./CountStyle";
import RandomPage from "../Random/RandomPage";

// eslint-disable-next-line react/prop-types
const CountDown = ({ handleStart }) => {
  const [countDown, setCountDown] = useState(3);
  const [result, setResult] = useState(false);

  useEffect(() => {
    if (countDown > 0) {
      const timer = setTimeout(() => {
        setCountDown(countDown - 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    } else if (countDown === 0) {
      setResult(true);
    }
  }, [countDown]);

  return (
    <>
      {countDown !== 0 ? <h3>{countDown}</h3> : null}
      {result && <RandomPage handleStart={handleStart} />}
      <C.ReBTN>처음으로</C.ReBTN>
    </>
  );
};

export default CountDown;
