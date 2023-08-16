import axios from "axios";

const API_URL = "http://localhost:3333/api/v1/user/";

const register = ( email:string, password:string) => {
  return axios.post(API_URL + "create", {
 
    email,
    password,
  });
};

const login = (email:string, password:string) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
    const data=localStorage.getItem("user");
  return JSON.parse(data!);
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;