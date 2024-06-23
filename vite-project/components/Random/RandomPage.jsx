import * as R from "./RandomPageStyle";
import MainHeader from "../common/MainHeader";
import { DATA } from "../../src/assets/ConstData";

// eslint-disable-next-line react/prop-types
const RandomPage = ({ handleStart }) => {
  const handleClickReStart = () => {
    handleStart();
  };

  const makeRandomType = (array) => {
    const randomNumber = Math.floor(Math.random() * array.length);
    const randomType = array[randomNumber];
    return randomType;
  };

  const randomType = makeRandomType(DATA);

  return (
    <R.Wrapper>
      <MainHeader>이런 취향이였구나? 씨익</MainHeader>
      <R.ImgWrapper src={randomType.src} alt="이상형 랜덤취향" />
      <R.Result>{randomType.name}</R.Result>
      <R.ReStartBtn onClick={handleClickReStart}>다시하기</R.ReStartBtn>
    </R.Wrapper>
  );
};

export default RandomPage;
