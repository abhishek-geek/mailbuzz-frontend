import axios from "axios";
const baseUrl = "/login";

const login = async (user) => {
  console.log(user);
  const res = await axios.post(baseUrl, user);
  return res.data;
};

const googleLogin = async () => {
  await axios.get(`login/google`);
};

const register = async (user) => {
  const res = await axios.post("/users", user);
  console.log(res.data);
  return res.data;
};

export default { login, googleLogin, register };
