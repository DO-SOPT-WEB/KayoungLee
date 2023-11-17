/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

export const Input = ({ type, name, value, onChange }) => (
  <InputWrapper>
    <span>{name.toUpperCase()}:</span>
    <InputField type={type} name={name} value={value} onChange={onChange} />
  </InputWrapper>
);

const InputWrapper = styled.div`
  display: flex;
  width: 70%;
  margin-bottom: 1rem;
  span {
    display: flex;
    align-items: center;
    width: 3rem;
    margin-right: 3rem;
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.5rem;
`;
