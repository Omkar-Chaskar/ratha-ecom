import axios from "axios";

export const useAxios = async (url, method, data) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("auth_token"),
        "Content-Type": "application/json"
      }
    });
    return response;
  } catch (error) {
    return error;
  }
};
