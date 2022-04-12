import {
    useContext,
    createContext,
    useState,
    useEffect
  } from "react";
  import axios from "axios";
  
  const ProductContext = createContext();
  const useProduct = () => useContext(ProductContext);
  
  const ProductProvider = ({ children }) => {

    const [productsList, setProductsList] = useState([]);
    const productApiCall = async () => {
      const response = await axios.get("/api/products");
      setProductsList(response.data.products);
    };
    useEffect(() => {
      productApiCall();
    }, []);

    return (
      <ProductContext.Provider
        value={{ productsList }}
      >
        {children}
      </ProductContext.Provider>
    );
  };
  
  export { ProductProvider, useProduct };
  