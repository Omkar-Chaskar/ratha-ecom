import axios from "axios";

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
    alert("Something went wrong: Cart Failed");
    console.error(err);
  }
};
