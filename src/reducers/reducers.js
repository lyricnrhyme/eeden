import { GET_ALL_USERS, ADD_USER, GET_USER_BY_ID } from '../actions/actions';

import { GET_ALL_DREAMS, ADD_DREAM, GET_DREAM_BY_ID } from '../actions/actions.js';

import { GET_ALL_STORES, GET_STORE_BY_ID, ADD_STORE } from '../actions/actions.js';

import { GET_ALL_PURCHASES, GET_PURCHASE_BY_ID, ADD_PURCHASE } from '../actions/actions.js';


const reducers = (state = {
    props: [],
    detailedProps: {}
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
            return { ...state, props: action.payload }

        case GET_DREAM_BY_ID:
            return { ...state, detailedProps: action.payload }

        case ADD_DREAM:
            state.props = [...state.props, ...action.payload]
            return { ...state, props: state.props }

        //~~~ Store Cases ~~~//
        case GET_ALL_STORES:
            return { ...state, props: action.payload }

        case GET_STORE_BY_ID:
            return { ...state, detailedProps: action.payload }

        case ADD_STORE:
            state.props = [...state.props, ...action.payload]
            return { ...state, props: state.props }

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




