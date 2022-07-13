import axios from "axios";
import toast from "react-hot-toast";

export const removeFromCart = async (_id) => {
  try {
    const { data, status } = await axios({
      method: "delete",
      url: `/api/user/cart/${_id}`,
      headers: { authorization: localStorage.getItem("auth_token") }
    });
    return { data, status };
  } catch (err) {
    toast("Cart update fail");
    console.error(err);
  }
};
