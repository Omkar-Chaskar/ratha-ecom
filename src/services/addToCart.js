import axios from "axios";

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
    alert("Something went wrong: Add To Cart Failed");
    console.error(err);
  }
};
