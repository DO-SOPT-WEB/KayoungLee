// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../components/Api";
import { Input } from "../components/Login/Input";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signIn({
        username: inputs.username,
        password: inputs.password,
      });
      localStorage.setItem("userId", response.id);

      navigate("/");
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const handleSignUpClick = () => {
    navigate("/Signup");
  };

  return (
    <LoginFormWrapper>
      <h3>LOGIN</h3>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          value={inputs.username}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        />
        <SubmitButton type="submit">LOGIN</SubmitButton>
        <SubmitButton onClick={handleSignUpClick}>SIGN UP</SubmitButton>
      </FormContainer>
    </LoginFormWrapper>
  );
};

const LoginFormWrapper = styled.div`
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

const SubmitButton = styled.button`
  width: 70%;
  margin-bottom: 10px;
  padding: 8px;
  background-color: #6c757d;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export default Login;
