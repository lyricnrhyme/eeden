import { GET_ALL_USERS } from '../actions/actions';

import { GET_ALL_DREAMS, ADD_DREAM } from '../actions/actions.js';


const initialState = [];

const reducers = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_USERS:
            return action.task

        case GET_ALL_DREAMS:
            return action.payload

        case ADD_DREAM:
            return [...state, action.payload]

        default:
            return state
    }
}

export default reducers;




