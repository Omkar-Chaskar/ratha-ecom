import axios from "axios";
import toast from "react-hot-toast";

export const addToWishlist = async (product) => {
  try {
    const { data, status } = await axios({
      method: "post",
      url: "/api/user/wishlist",
      headers: { authorization: localStorage.getItem("auth_token") },
      data: { product }
    });
    return { data, status };
  } catch (err) {
    toast("Wishlist update fail");
    console.error(err);
  }
};
