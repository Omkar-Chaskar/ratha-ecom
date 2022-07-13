import axios from "axios";
import toast from "react-hot-toast";

export const setQuantityToCart = async (_id, actionType) => {
  try {
    const { data, status } = await axios({
      method: "post",
      url: `/api/user/cart/${_id}`,
      headers: { authorization: localStorage.getItem("auth_token") },
      data: { action: { type: actionType } }
    });
    return { data, status };
  } catch (err) {
    toast("Failed to update cart");
    console.error(err);
  }
};
