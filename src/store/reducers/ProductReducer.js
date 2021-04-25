import { ADD_PRODUCT_ACTION_KEY, EDIT_PRODUCT_ACTION_KEY } from "../constant";
const initial_state = [];
const ProductReducer = (state = initial_state, action) => {
  switch (action.type) {
    case ADD_PRODUCT_ACTION_KEY:
      return [...state, action.payload];
    case EDIT_PRODUCT_ACTION_KEY:
      const { editItem, ...productData } = action.payload;
      state[editItem] = productData;
      return state;
    default:
      return state;
  }
};
export default ProductReducer
