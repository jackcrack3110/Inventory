import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk'
import LoginReducer from './reducers/LoginReducer';
import ProductReducer from './reducers/ProductReducer';

const ConfigureStore = () => {
    var intialState = {};
    try {
        intialState = localStorage.getItem("master_class") ? JSON.parse(localStorage.getItem("master_class")) : {};
    } catch (error) {
        console.log('getError', error)
    }
    const saver = (store) => next => action => {
    let result = next(action);
    let stateToSave = store.getState();
        localStorage.setItem("master_class", JSON.stringify({ ...stateToSave }))
    return result;
}
    const rootReducer = combineReducers({
        login: LoginReducer,
        product:ProductReducer,
    });

    return createStore(rootReducer,intialState,applyMiddleware(thunk,saver));

}
export default ConfigureStore;