import * as T from "./TasteStartStyel";
import TasteCategory from "../../components/Taste/TasteCategory";

export default function TasteStart(props) {
  // eslint-disable-next-line react/prop-types
  const { start, handleStart } = props;
  function handleClickBtn() {
    handleStart();
  }
  return (
    <>
      {!start ? (
        <T.Wrapper>
          <T.ButtonSection>취향대로 추천</T.ButtonSection>
          <T.StartBtn onClick={handleClickBtn}>시작하기</T.StartBtn>
        </T.Wrapper>
      ) : (
        <TasteCategory handleStart={handleStart} />
      )}
    </>
  );
}
