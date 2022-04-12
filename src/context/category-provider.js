import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const CategoryContext = createContext();
const useCategory = () => useContext(CategoryContext);
const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState([]);

  async function categoryApiCall() {
    const response = await axios.get("/api/categories");
    setCategory(response.data.categories);
  }

  useEffect(() => {
    categoryApiCall();
  }, []);

  return (
    <CategoryContext.Provider value={{ category }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider, useCategory };
