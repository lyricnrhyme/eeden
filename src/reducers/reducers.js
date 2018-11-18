import { GET_ALL_USERS, ADD_USER, GET_USER_BY_ID } from '../actions/actions';

import { GET_ALL_DREAMS, ADD_DREAM, GET_DREAM_BY_ID, EDIT_DREAM, DELETE_DREAM } from '../actions/actions.js';

import { GET_ALL_STORES, GET_STORE_BY_ID, ADD_STORE, EDIT_STORE } from '../actions/actions.js'


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

        case EDIT_DREAM:
            return { ...state, detailedProps: action.payload }

        case DELETE_DREAM:
            let updatedState = state.allprops.filter(event => {
                return event.id !== action.payload;
            })
            state.allprops = updatedState;
            return { ...state }



        //~~~ Store Cases ~~~//
        case GET_ALL_STORES:
            return { ...state, allprops: action.payload }

        case GET_STORE_BY_ID:
            return { ...state, detailedProps: action.payload }

        case ADD_STORE:
            state.allprops = [...state.allprops, ...action.payload]
            return { ...state, allprops: state.allprops }

        case EDIT_STORE:
            return { ...state, detailedProps: action.payload }

        default:
            return state
    }
}

export default reducers;




