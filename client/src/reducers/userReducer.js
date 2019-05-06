
import isEmpty from '../helpers/isEmpty';

let initialState = {
    isAuthenticated : false,
    users :{}
}

const users =  (state = {}, action) => {
    switch (action.type) {
        case "LOGIN_USER" :
            return {
                ...state,
                users: action.payload
            }
        case "LOGOUT_USER" :
                state = {...state,isAuthenticated : !isEmpty(action.payload) ,users:action.payload} 
            break;
        case "CREATE_USER":
            state = { ...state, users: action.payload };
            break;
        case "ERROR_MESSEGE" :
            state = {...state,users:action.payload};
            break;
        case "GET_USER" :
            state = {...state,users:action.payload};
            break;
        default:
            return state;   
    }
    return state;
}


export default users;