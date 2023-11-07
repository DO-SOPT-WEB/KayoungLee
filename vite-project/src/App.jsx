import styled from "styled-components";
import Header from "../components/Header";
import MainWrapper from "../components/MainWrapper";

function App() {
  return (
    <Wrapper>
      <Header />
      <MainWrapper />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;
