
import {ADD_PRODUCT_ACTION_KEY} from '../constant';

export const AddProductAction = (payload) => (dispatch, getState)=>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            let result ={...payload}
            dispatch({ type: ADD_PRODUCT_ACTION_KEY, payload: result });
            resolve({success:true})
        }, 2000);
    });
}