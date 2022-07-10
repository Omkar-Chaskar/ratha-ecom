import axios from "axios";

export const removeFromCart = async (_id) => {
  try {
    const { data, status } = await axios({
      method: "delete",
      url: `/api/user/cart/${_id}`,
      headers: { authorization: localStorage.getItem("auth_token") }
    });
    return { data, status };
  } catch (err) {
    alert("Something went wrong: Remove From Cart Failed");
    console.error(err);
  }
};
