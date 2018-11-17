import { GET_ALL_USERS, ADD_USER, GET_USER_BY_ID } from '../actions/actions';

import { GET_ALL_DREAMS, ADD_DREAM, GET_DREAM_BY_ID } from '../actions/actions.js';

import { GET_ALL_STORES, GET_STORE_BY_ID, ADD_STORE } from '../actions/actions.js'


const reducers = (state = {
    allprops: [],
    detailedProps: {}
}, action) => {

    switch (action.type) {

        //~~~ User Cases ~~~//
        case GET_ALL_USERS:
            return action.task

        case ADD_USER:
            return [...state, action.payload]

        case GET_USER_BY_ID:
            
            return { ...state, detailedProps: action.payload }


        //~~~ Dream Cases ~~~//
        case GET_ALL_DREAMS:
            return { ...state, allprops: action.payload }

        case GET_DREAM_BY_ID:
            return { ...state, detailedProps: action.payload }

        case ADD_DREAM:
            state.allprops = [...state.allprops, ...action.payload]
            return { ...state, allprops: state.allprops }

        //~~~ Store Cases ~~~//
        case GET_ALL_STORES:
            return { ...state, allprops: action.payload }

        case GET_STORE_BY_ID:
            return { ...state, detailedProps: action.payload }

        case ADD_STORE:
            state.props = [...state.allprops, ...action.payload]
            return { ...state, allprops: state.allprops }

        default:
            return state
    }
}

export default reducers;




