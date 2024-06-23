/* eslint-disable react/prop-types */
import { Button } from "./TasteBtnStyle";
import TasteStart from "../TasteStart/TasteStart";

const TasteBtn = (props) => {
  const handleClick = () => {
    props.setTaste((prev) => !prev);
  };

  return (
    <>
      {!props.random && !props.taste && (
        <Button onClick={handleClick}>취향대로 추천</Button>
      )}
      {!props.random && props.taste && (
        <TasteStart start={props.start} handleStart={props.handleStart} />
      )}
    </>
  );
};

export default TasteBtn;
