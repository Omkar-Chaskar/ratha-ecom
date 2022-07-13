import axios from "axios";
import toast from "react-hot-toast";

const logInServices = async (logInData) => {
  try {
    const { data, status } = await axios.post("/api/auth/login", logInData);
    return { data, status };
  } catch {
    toast("Login Fail");
    console.error("LogIn failed");
  }
};
export { logInServices };
