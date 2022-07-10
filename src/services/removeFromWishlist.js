import axios from "axios";

export const removeFromWishlist = async (_id) => {
  try {
    const { data, status } = await axios({
      method: "delete",
      url: `/api/user/wishlist/${_id}`,
      headers: { authorization: localStorage.getItem("auth_token") }
    });
    return { data, status };
  } catch (err) {
    alert("Something went wrong: Remove From Wishlist Failed");
    console.error(err);
  }
};
