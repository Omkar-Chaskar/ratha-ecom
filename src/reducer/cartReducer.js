export function productReducer( cartState, action) {
    switch (action.type) {  
      case "ADD_TO_CART":
        return {
          ...cartState,
          cartItems: cartState.cartItems.concat(action.payload),
          oriPrice: cartState.oriPrice + action.payload.orignalPrice,
          discPrice: cartState.discPrice + action.payload.discountPrice,
          curPrice: cartState.curPrice + action.payload.price
        };
  
      case "REMOVE_FROM_CART":
        return {
          ...cartState,
          cartItems: cartState.cartItems.filter(
            (item) => action.payload._id !== item._id
          ),
          oriPrice: cartState.oriPrice - action.payload.orignalPrice,
          discPrice: cartState.discPrice - action.payload.discountPrice,
          curPrice: cartState.curPrice - action.payload.price
        };

      default:
        return cartState ;
    }
  }
  