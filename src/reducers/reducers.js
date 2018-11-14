import { GET_ALL_USERS } from '../actions/actions';

import { GET_ALL_DREAMS, ADD_DREAM, GET_DREAM_BY_ID } from '../actions/actions.js';

import { GET_ALL_STORES } from '../actions/actions.js'




const reducers = (state = {
    props: [],
    detailedProps: {}
},
    action) => {
    switch (action.type) {

        case GET_ALL_USERS:
            return action.task

        case GET_ALL_DREAMS:
            return { ...state, props: action.payload }

        case ADD_DREAM:
            return [...state, action.payload]

        case GET_ALL_STORES:
            return { ...state, props: action.payload }

        case GET_DREAM_BY_ID:
            return { ...state, detailedProps: action.payload }

        default:
            return state
    }
}

export default reducers;




