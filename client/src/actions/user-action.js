import axios from 'axios';
import setAuthToken from '../helpers/AuthToken'
import jwt_decode from 'jwt-decode';

export function updateUser(newUser){
    return dispatch => {
            const data = {
                username: newUser.username,
                email: newUser.email,
                password: newUser.password,
                address: newUser.password
            }
            axios({
                method: 'POST',
                baseURL: 'http://localhost:5000/v1/api/user/register',
                data: data
            }).then(response => {
                if (response) {
                    alert('SUCCESS');
                    console.log(response.status);
                    return dispatch({
                        type: "CREATE_USER",
                        payload: {
                            users: newUser
                        }
                    });
                }
            }).catch((error) => {
                console.log(error);
            });
    }
}

export function loginUser(newUser,props){
    return  dispatch => {
             axios({
                method: "POST",
                baseURL: "http://localhost:5000/v1/api/user/login",
                data: newUser
            }).then((response) => {
                if (response) {
                    props.history.push('/Dashboard');
                    localStorage.setItem('token',response.data.token);
                    setAuthToken(response.data.token);
                    let decoded = jwt_decode(response.data.token);
                    dispatch(setCurrentUser(decoded));
                }
            }).catch(error => {
                alert('error');
                return dispatch ({
                    type:"ERROR_MESSEGE",
                    payload:{
                        isAuthenticated: false,
                        isLoading: false
                    }
                })
            });
    }
}


export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('token');
}

export const setCurrentUser = decoded => {
    return {
        type:"LOGIN_USER",
        payload: {
            ...decoded,
            isAuthenticated : true,
            isLoading : true
        }
    }
}
