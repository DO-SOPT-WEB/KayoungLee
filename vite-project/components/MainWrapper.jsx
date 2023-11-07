import { useState } from "react";
import MainHeader from "./common/MainHeader";

import * as M from "../style/MainStyle";

import TasteBtn from "../ui/TasteBtn/TasteBtn";
import RandomBtn from "../ui/RandomBtn/RandomBtn";

const MainWrapper = () => {
  const [start, setStart] = useState(false);
  const [taste, setTaste] = useState(false);
  const [random, setRandom] = useState(false);

  const handleStart = () => {
    setStart((prev) => !prev);
  };

  return (
    <M.Wrapper>
      {!start ? <MainHeader>원하는 추천 방식을 골라줘!</MainHeader> : null}
      <M.BtnWrapper>
        <TasteBtn
          taste={taste}
          random={random}
          setTaste={setTaste}
          start={start}
          handleStart={handleStart}
        />
        <RandomBtn
          taste={taste}
          random={random}
          setRandom={setRandom}
          start={start}
          handleStart={handleStart}
        />
      </M.BtnWrapper>
    </M.Wrapper>
  );
};

export default MainWrapper;
