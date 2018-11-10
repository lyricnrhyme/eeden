import { GET_ALL_USERS } from '../actions/actions';

const initialState = [];
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return action.payload
        default:
            return state
    }
}

export default reducer;