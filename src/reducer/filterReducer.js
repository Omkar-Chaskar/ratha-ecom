export function filterReducer(state, action) {
    switch (action.type) {
      case "SORT":
        return { ...state, sort: action.payload };
  
      case "FILTER_BY_CATEGORY":
        return {
          ...state,
          category: {
            ...state.category,
            [action.payload]: !state.category[action.payload]
          }
        };
  
      case "FILTER_BY_RATINGS":
        return {
          ...state,
          rating: action.payload
        };
  
      case "FILTER_BY_PRICE":
        return { ...state, filterByPrice: action.payload };
  
      case "CLEAR":
        return {
          sort: "",
          category: {},
          rating: "",
          filterByPrice: {
            start: 1,
            end: 1000
          }
        };
  
      default:
        return state;
    }
  }
  