import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 20rem;
  font-size: 3rem;
  border-radius: 3rem;
  background-color: ${({ active }) => (active ? "#1d5c93" : "#d7ecff")};
  &:hover {
    background-color: #1d5c93;
  }
`;

export const MoveToNext = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 3px;
  background-color: #1b95ff;
  cursor: pointer;
  &:hover {
    background-color: #215e94;
  }
`;

export const ImgWrapper = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25rem;
  height: 27rem;
`;

export const MoveToAgain = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  border-radius: 3rem;
  background-color: #ffeb43;
  cursor: pointer;
  margin: 0 auto;
  width: 15rem;
  font-size: 2rem;
  position: relative;
  margin-top: 2rem;
`;
