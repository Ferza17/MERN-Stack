import {createStore , combineReducers, applyMiddleware , compose}  from 'redux';

import thunk  from 'redux-thunk';

import users from '../reducers/userReducer';
import barang from '../reducers/barangReducer';





let allStoreEnhancers = compose(
     applyMiddleware(thunk ),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);



let allReducers = combineReducers({
    users,
    barang
});


let stores = createStore(
    allReducers,{},
    allStoreEnhancers
     
);


export default stores;