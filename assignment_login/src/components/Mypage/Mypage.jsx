/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getUserData, logoutUser } from "../Api";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const userId = localStorage.getItem("userId");
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser(navigate);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await getUserData(userId);
        setUserData(user);
      } catch (error) {
        console.error("Error 데이터 조회 실패 : ", error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  return (
    <BioCard>
      <h5>My Page</h5>
      <hr />
      <p>
        <strong>name</strong>: {userData?.username}
      </p>
      <p>
        <strong>nickname</strong>: {userData?.nickname}
      </p>
      <button onClick={handleLogout}>Logout</button>
    </BioCard>
  );
};

const BioCard = styled.div`
  margin: auto;
  width: 75%;
  border-radius: 0.25rem;
  text-align: left;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h5 {
    font-size: 1.25rem;
    margin-top: 0.5rem;
  }

  hr {
    margin-top: 0;
  }

  p {
    margin-bottom: 0.5rem;
  }

  strong {
    color: #343a40;
  }

  button {
    background-color: #6c757d;
    color: #fff;
    padding: 8px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
  }
`;

export default MyPage;
