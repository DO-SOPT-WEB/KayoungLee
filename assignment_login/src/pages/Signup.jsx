// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupUser, checkUsernameAvailability } from "../components/Api";
import styled from "styled-components";

const Signup = () => {
  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [buttonColor, setButtonColor] = useState("black");

  const [inputs, setInputs] = useState({
    username: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });

  const [isExist, setIsExist] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setError(null);

    setInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));

    if (
      inputs.username === "" ||
      inputs.password === "" ||
      inputs.passwordCheck === "" ||
      inputs.nickname === ""
    ) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  };

  const handleUsernameCheck = async () => {
    try {
      const exist = await checkUsernameAvailability(inputs.username);
      setIsExist(!exist);
      if (exist) {
        setButtonColor("red");
        setIsButtonDisabled(true);
      } else {
        setButtonColor("green");
        if (
          inputs.username === "" ||
          inputs.password === "" ||
          inputs.passwordCheck === "" ||
          inputs.nickname === ""
        ) {
          setIsButtonDisabled(true);
        } else {
          setIsButtonDisabled(false);
        }
      }
    } catch (error) {
      console.error("아이디 중복입니다:", error);
      setButtonColor("black");
      setIsButtonDisabled(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleUsernameCheck();

      if (isExist) {
        await SignupUser({
          username: inputs.username,
          nickname: inputs.nickname,
          password: inputs.password,
        });

        navigate("/login");
      } else {
        setError("아이디 중복입니당.");
      }
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <SignupContainer>
      <FormContainer>
        <h3>SIGN UP</h3>
        <InputWrapper>
          <span>ID : </span>
          <InputField
            type="text"
            name="username"
            placeholder="아이디를 입력해주세요"
            onChange={handleChange}
          />
          <Button
            type="button"
            onClick={handleUsernameCheck}
            color={buttonColor}
          >
            중복 체크
          </Button>
          {!isExist && <ErrorMessage>아이디 중복입니다.</ErrorMessage>}
        </InputWrapper>

        <InputWrapper>
          <span>비밀번호 : </span>
          <InputField
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={handleChange}
          />
        </InputWrapper>

        <InputWrapper>
          <span>비밀번호 확인: </span>
          <InputField
            type="passwordCheck"
            name="passwordCheck"
            placeholder="비밀번호를 다시 한 번 입력해주세요."
            onChange={handleChange}
          />
        </InputWrapper>

        <InputWrapper>
          <span>닉네임 : </span>
          <InputField
            type="nickname"
            name="nickname"
            placeholder="닉네임을 입력해주세요."
            onChange={handleChange}
          />
        </InputWrapper>

        <SubmitButton
          type="button"
          onClick={handleSubmit}
          disabled={isButtonDisabled}
        >
          Signup
        </SubmitButton>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        <LinksContainer>
          Do you have an account? <Link to="/login">login</Link>
        </LinksContainer>
      </FormContainer>
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
  text-align: center;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  color: white;
  background-color: ${(props) => props.color};
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.5rem;
`;

const SubmitButton = styled.button`
  margin-bottom: 10px;
  padding: 8px;
  background-color: ${(props) => (props.disabled ? "gray" : "blue")};
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ErrorMessage = styled.small`
  color: #dc3545;
  margin-bottom: 10px;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 70%;
  margin-bottom: 1rem;
  span {
    display: flex;
    align-items: center;
    width: 10rem;
    margin-right: 3rem;
  }
`;

const LinksContainer = styled.p`
  margin-bottom: 10px;
`;

export default Signup;
