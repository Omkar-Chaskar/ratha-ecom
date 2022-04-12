export function productReducer(wishlistState, action) {
    switch (action.type) {  
  
      case "ADD_TO_WISHLIST":
        return { ...wishlistState, wishlist: wishlistState.wishlist.concat(action.payload) };
  
      case "REMOVE_FROM_WISHLIST":
        return {
          ...wishlistState,
          wishlist: wishlistState.wishlist.filter(
            (item) => action.payload._id !== item._id
          )
        };
  
      default:
        return wishlistState;
    }
  }
  