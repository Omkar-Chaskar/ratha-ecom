import axios from "axios";
import toast from "react-hot-toast";

export const addToCart = async (product) => {
  try {
    const { data, status } = await axios({
      method: "post",
      url: "/api/user/cart",
      headers: { authorization: localStorage.getItem("auth_token") },
      data: { product }
    });
    return { data, status };
  } catch (err) {
    toast("Cart update fail");
    console.error(err);
  }
};
