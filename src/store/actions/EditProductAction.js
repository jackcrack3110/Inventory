import { EDIT_PRODUCT_ACTION_KEY } from "../constant";

export const EditProductAction = (payload) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = { ...payload };
      console.log("edit payload ", payload);
      dispatch({ type: EDIT_PRODUCT_ACTION_KEY, payload: result });
      resolve({ success: true });
    }, 2000);
  });
};
