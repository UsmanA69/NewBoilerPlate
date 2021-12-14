import * as actions from "../Actions/actionTypes";

const INITIAL_STATE = {
  count: 0,
  // products:[]
};

const sendDataToCart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.sendItemToCart:
      // let arr = state.products
      // let newarr = action.products
      // return { ...action,products:[...arr,newarr]};
      return { ...action};

    default:
      return state;
  }
};
export default sendDataToCart;
