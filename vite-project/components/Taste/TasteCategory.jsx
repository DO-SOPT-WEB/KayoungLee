import * as C from "./TasteCategoryStyle.js";
import MainHeader from "../common/MainHeader.jsx";
import { useState } from "react";
import { DATA } from "../../src/assets/ConstData.js"; // Import your data

// eslint-disable-next-line react/prop-types
const TasteCategory = ({ handleStart }) => {
  const [selectedCategoryLevel1, setSelectedCategoryLevel1] = useState(null);
  const [selectedCategoryLevel2, setSelectedCategoryLevel2] = useState(null);
  const [selectedCategoryLevel3, setSelectedCategoryLevel3] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(1); // Track the current level
  const [categorySelected, setCategorySelected] = useState(false); // Track if a category has been selected

  const categoriesLevel1 = ["소년", "청년", "중년"];
  const categoriesLevel2 = ["착한", "나쁜", "마성"];
  const categoriesLevel3 = ["유쌍", "무쌍"];

  const getMainHeaderContent = () => {
    switch (currentLevel) {
      case 1:
        return "나이대를 골라봐!";
      case 2:
        return "성격은 어때?";
      case 3:
        return "마지막으로 골라줘!";
      default:
        return "카테고리를 골라봐!";
    }
  };

  const handleCategorySelect = (level, category) => {
    switch (level) {
      case 1:
        setSelectedCategoryLevel1(category);
        break;
      case 2:
        setSelectedCategoryLevel2(category);
        break;
      case 3:
        setSelectedCategoryLevel3(category);
        break;
      default:
        break;
    }

    setCategorySelected(true);
  };

  const canProceed =
    selectedCategoryLevel1 && selectedCategoryLevel2 && selectedCategoryLevel3;

  const selectedData = DATA.find(
    (data) =>
      data.category === selectedCategoryLevel1 &&
      data.type === selectedCategoryLevel2 &&
      data.eye === (selectedCategoryLevel3 === "유쌍" ? true : false)
  );

  const handlePreLevel = () => {
    if (currentLevel > 1) {
      setCurrentLevel(currentLevel - 1);
      setCategorySelected(false); // 초기화 categorySelected
    }
  };

  const handleNextLevel = () => {
    if (categorySelected) {
      if (currentLevel < 3) {
        setCurrentLevel(currentLevel + 1);
      }
      setCategorySelected(false);
    }
  };

  return (
    <C.Wrapper>
      {!canProceed ? (
        <MainHeader>{getMainHeaderContent()}</MainHeader>
      ) : (
        <>
          <MainHeader>이런 취향이구나 흐흐?</MainHeader>
          <img src={selectedData.src} alt="Selected Image" />
        </>
      )}

      <C.BtnWrapper>
        {currentLevel === 1 &&
          categoriesLevel1.map((category) => (
            <C.Button
              key={category}
              onClick={() => handleCategorySelect(1, category)}
              active={selectedCategoryLevel1 === category}
            >
              {category}
            </C.Button>
          ))}

        {currentLevel === 2 &&
          categoriesLevel2.map((category) => (
            <C.Button
              key={category}
              onClick={() => handleCategorySelect(2, category)}
              active={selectedCategoryLevel2 === category}
            >
              {category}
            </C.Button>
          ))}

        {currentLevel === 3 &&
          categoriesLevel3.map((category) => (
            <C.Button
              key={category}
              onClick={() => handleCategorySelect(3, category)}
              active={selectedCategoryLevel3 === category}
            >
              {category}
            </C.Button>
          ))}
      </C.BtnWrapper>

      <C.BtnWrapper>
        <C.MoveToNext onClick={handleStart}>처음으로</C.MoveToNext>
        <C.MoveToNext onClick={handleNextLevel}>다음으로</C.MoveToNext>
        <C.MoveToNext onClick={handlePreLevel}>이전으로</C.MoveToNext>
      </C.BtnWrapper>
    </C.Wrapper>
  );
};

export default TasteCategory;
