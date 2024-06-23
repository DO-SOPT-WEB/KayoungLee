/* eslint-disable react/prop-types */
import RandomStartBtn from "../RandomStart/RandomStartBtn";
import * as B from "./RandomBtnStyle";

const RandomBtn = (props) => {
  const handleClick = () => {
    props.setRandom((prev) => !prev);
  };

  return (
    <>
      {!props.random && !props.taste && (
        <>
          <B.Button onClick={handleClick}>랜덤 추천</B.Button>
        </>
      )}
      {props.random && (
        <RandomStartBtn start={props.start} handleStart={props.handleStart} />
      )}
    </>
  );
};

export default RandomBtn;
