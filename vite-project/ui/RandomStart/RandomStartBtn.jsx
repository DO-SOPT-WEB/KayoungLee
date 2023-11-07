import * as R from "./RandomStartStyle";
import CountDown from "../../components/Count/CountDown";

// eslint-disable-next-line react/prop-types
const RandomStartBtn = ({ start, handleStart }) => {
  const handleClickBtn = () => {
    handleStart();
  };

  return (
    <>
      {!start ? (
        <R.Wrapper>
          <R.ButtonSection>랜덤 추천</R.ButtonSection>
          <R.StartBtn onClick={handleClickBtn}>시작하기</R.StartBtn>
          <R.ReBTN onClick={handleClickBtn}>처음으로</R.ReBTN>
        </R.Wrapper>
      ) : (
        <CountDown handleStart={handleStart} />
      )}
    </>
  );
};

export default RandomStartBtn;
