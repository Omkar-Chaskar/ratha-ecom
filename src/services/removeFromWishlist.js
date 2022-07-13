import axios from "axios";
import toast from "react-hot-toast";

export const removeFromWishlist = async (_id) => {
  try {
    const { data, status } = await axios({
      method: "delete",
      url: `/api/user/wishlist/${_id}`,
      headers: { authorization: localStorage.getItem("auth_token") }
    });
    return { data, status };
  } catch (err) {
    toast("Wishlist update fail");
    console.error(err);
  }
};
