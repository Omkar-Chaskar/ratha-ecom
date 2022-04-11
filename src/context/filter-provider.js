import {
    useContext,
    createContext,
    useReducer
  } from "react";

  import {
    Compose,
    filterSortBy,
    categoryFilter,
    ratingsFilter,
    filterPrice
  } from "../utils/filter";

  import { filterReducer } from "../reducer/filterReducer";
  import { useProduct } from "./product-provider";
  
  const FilterContext = createContext();
  const useFilter = () => useContext(FilterContext);
  
  const FilterProvider = ({ children }) => {
    
    const { productsList } = useProduct();
  
    const [state, dispatch] = useReducer(filterReducer, {
      sortBy: "",
      category: {},
      rating: "",
      filterByPrice: {
        start: 1,
        end: 1000
      }
    });
    const filteredProduct = Compose(
      state,
      filterSortBy,
      categoryFilter,
      ratingsFilter,
      filterPrice
    )(productsList);
  
    return (
      <FilterContext.Provider
        value={{ productsList: filteredProduct, state, dispatch }}
      >
        {children}
      </FilterContext.Provider>
    );
  };
  
  export { FilterProvider, useFilter };
  