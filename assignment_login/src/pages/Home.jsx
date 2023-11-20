// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import MyPage from "../components/Mypage/Mypage";

const Home = () => {
  return (
    <HomeWrapper>
      <MyPage />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;
  margin: 0 auto;
`;

export default Home;
