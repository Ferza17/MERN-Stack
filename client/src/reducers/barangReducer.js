import {CREATE_BARANG, GET_BARANG, DELETE_BARANG, UPDATE_BARANG , ERROR_MESSEGE, SUCCES_MESSEGE} from '../actions/barang-action';

let initialState = {
    isSucces : false,
    isLoading : false,
    isModalEdit : false,
    isModalNew : false,
    items : []
}

function barangs(state = initialState, action) {
    switch(action.type){
        case CREATE_BARANG:
            return {
                ...state,
                isSucces : true,
                isLoading : true,
                isModalEdit: false,
                isModalNew : false,
                items : action.payload
            }
        case GET_BARANG :
            return {
                ...state,
                isSucces : true,
                isLoading : true,
                isModalEdit: false,
                isModalNew : false,
                items : action.payload
            }
        case DELETE_BARANG :
            return {
                ...state,
                isSucces: true,
                isLoading: true,
                isModalEdit: false,
                isModalNew : false,
                items: action.payload
            }
        case UPDATE_BARANG :
            return {
                ...state,
                isSucces: true,
                isLoading: true,
                isModalEdit: false,
                isModalNew : false,
                items: action.payload
            }
        case ERROR_MESSEGE :
            return{
                ...state,
                isSucces : false,
                isLoading : false,
            }
        case SUCCES_MESSEGE :
            return{
                ...state,
                isSucces : true,
                isLoading : true
            }
        default :
            return state;
    }
}

export default barangs;