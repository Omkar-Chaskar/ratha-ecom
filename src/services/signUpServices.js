import axios from "axios";
import toast from "react-hot-toast";

const signUpServices = async (signUpData) => {
  console.log(signUpData);

  try {
    const { data, status } = await axios.post("/api/auth/signup", signUpData);
    return { data, status };
  } catch {
    toast("Sign up failed");
  }
};
export { signUpServices };
