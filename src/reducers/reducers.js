import { GET_ALL_USERS, ADD_USER, GET_USER_BY_ID } from '../actions/actions';

import { GET_ALL_DREAMS, ADD_DREAM, GET_DREAM_BY_ID, GET_DREAM_BY_STORE_ID } from '../actions/actions.js';

import { GET_ALL_STORES, GET_STORE_BY_ID, ADD_STORE, GET_STORE_BY_USER_ID } from '../actions/actions.js';

import { GET_ALL_PURCHASES, GET_PURCHASE_BY_ID, ADD_PURCHASE } from '../actions/actions.js';


const reducers = (state = {
    allprops: [],
    detailedProps: {},
    currentStoreDreams: []
}, action) => {

    switch (action.type) {

        //~~~ User Cases ~~~//
        case GET_ALL_USERS:
            return action.task

        case GET_USER_BY_ID:
            
            return { ...state, detailedProps: action.payload }

        case ADD_USER:
            return [...state, action.payload]

        //~~~ Dream Cases ~~~//
        case GET_ALL_DREAMS:
            return { ...state, allprops: action.payload }

        case GET_DREAM_BY_ID:
            return { ...state, detailedProps: action.payload }

        case GET_DREAM_BY_STORE_ID:
            return {...state, currentStoreDreams: action.payload}

        case ADD_DREAM:
            state.allprops = [...state.allprops, ...action.payload]
            return { ...state, allprops: state.allprops }

        //~~~ Store Cases ~~~//
        case GET_ALL_STORES:
            return { ...state, allprops: action.payload }

        case GET_STORE_BY_ID:
            return { ...state, detailedProps: action.payload }

        case GET_STORE_BY_USER_ID:
            return { ...state, currentStore: action.payload }

        case ADD_STORE:
            state.props = [...state.allprops, ...action.payload]
            return { ...state, allprops: state.allprops }

        //~~~ Purchase Cases ~~~//
        case GET_ALL_PURCHASES:
            return { ...state, props: action.payload }

        case GET_PURCHASE_BY_ID:
            return { ...state, detailedProps: action.payload }

        case ADD_PURCHASE:
            state.props = [...state.props, ...action.payload]
            return { ...state, props: state.props }
            
        default:
            return state
    }
}

export default reducers;




