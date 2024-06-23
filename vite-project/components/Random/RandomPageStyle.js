import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const ImgWrapper = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25rem;
  height: 27rem;
`;

export const Result = styled.h2`
  background-color: #72bdff;
`;

export const ReStartBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 3px;
  background-color: #72bdff;

  &:hover {
    background-color: #366b99;
  }
`;
