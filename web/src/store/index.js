import {createStore} from 'redux';


function reducer() {
    return {
        isAuthenticated: false,
        user: {}
    };
}


const store = createStore(reducer);

export default store;