import cartActionTypes from "./cart.types";

export const toggleCartHidden = () => {
  return {
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
  };
};

export const addItem = (item) => {
  return {
    type: cartActionTypes.ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: cartActionTypes.REMOVE_ITEM,
    payload: item,
  };
};

export const removeItemFromCart = (item) => {
  return {
    type: cartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item,
  };
};
