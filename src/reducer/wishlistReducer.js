export function productReducer(wishlistState, action) {
  switch (action.type) {
    case "GET_WISHLIST":
      return [...action.payload];

    default:
      return wishlistState;
  }
}
