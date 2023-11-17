/* eslint-disable no-useless-catch */
import axios from "axios";

const apiUrl = import.meta.env.VITE_BASE_URL;

/** api 인스턴스 생성 */
const api = axios.create({
  baseURL: `${apiUrl}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

/** 로그인 */
export const signIn = async (userData) => {
  try {
    const response = await api.post("/members/sign-in", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/** 회원가입 */
export const SignupUser = async (userData) => {
  try {
    const response = await api.post("/members", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/** 아이디 중복 체크 */
export const checkUsernameAvailability = async (username) => {
  try {
    const response = await api.get("/members/check", {
      params: {
        username,
      },
    });
    return response.data.isExist;
  } catch (error) {
    throw error;
  }
};

/** 회원 정보 조회 */
export const getUserData = async (userId) => {
  try {
    const response = await api.get(`/members/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

/** 로그아웃 */
export const logoutUser = (navigate) => {
  localStorage.removeItem("userId");
  navigate("/login");
};

export default api;
