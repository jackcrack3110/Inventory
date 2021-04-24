import { ADD_PRODUCT_ACTION_KEY } from '../constant';
const initial_state = [
    
]
const ProductReducer = (state = initial_state, action) => {
    switch (action.type) {
        case ADD_PRODUCT_ACTION_KEY:
            return [ ...state, action.payload ];
        default:
            return state;
    }
}
export default ProductReducer;