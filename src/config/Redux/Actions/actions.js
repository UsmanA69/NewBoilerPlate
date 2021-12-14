import * as actions from "./actionTypes";

export const SEND_ITEM_TO_CART = (obj) => ({
  type: actions.sendItemToCart,
  obj
});
