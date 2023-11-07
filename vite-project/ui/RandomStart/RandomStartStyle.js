import styled from "styled-components";

export const StartBtn = styled.button`
  display: flex;
  width: 10rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #3c96f0;
  border-radius: 5px;

  &:hover {
    border: 2px solid #000000; /* Add a border on hover */
  }
`;

export const ReBTN = styled.button`
  display: flex;
  position: absolute;
  top: -22rem;
  right: -25rem;
  width: 10rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #3c96f0;
  border-radius: 5px;

  &:hover {
    border: 2px solid #000000; /* Add a border on hover */
  }
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const ButtonSection = styled.article`
  display: flex;
  width: 25rem;
  height: 25rem;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #d4ebff;
  width: 50rem;
`;
