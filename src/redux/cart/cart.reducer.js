import cartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";
const initialState = {
  hidden: true,
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      };

    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
