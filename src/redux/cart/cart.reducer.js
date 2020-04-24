import cartActionTypes from "./cart.types";
import { addItemToCart, removeItem } from "./cart.utils";
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
        items: removeItem(state.items, action.payload),
      };

    case cartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case cartActionTypes.EMPTY_CART:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
