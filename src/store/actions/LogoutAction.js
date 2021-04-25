
import {LOGOUT_ACTION_KEY} from '../constant';

export const LogoutAction = () => (dispatch)=>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            dispatch({ type: LOGOUT_ACTION_KEY});
            resolve({success:true})
        }, 3000);
    });
}