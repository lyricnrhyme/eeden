import axios from 'axios';

export const GET_ALL_USERS = 'GET_ALL_USERS';

export const GET_ALL_DREAMS = 'GET_ALL_DREAMS';
export const ADD_DREAM = 'ADD_DREAM';




//~~~~~~~~~~ USER ACTIONS ~~~~~~~~~~//
export const getAllUsers = () => {
    return dispatch => {
        axios.get('http://34.219.218.138:8080/api/users')
            .then(items => {
                // console.log('hello?', items);
                dispatch({
                    type: GET_ALL_USERS,
                    task: items.data
                })
            })
    }
}


//~~~~~~~~~~ DREAM ACTIONS ~~~~~~~~~~//
//~~~ REQUEST TO GET ALL DREAMS ~~~//
export const getAllDreams = () => {
    console.log('ACTION GET HITTING?')

    return dispatch => {
        axios.get('http://34.219.218.138:8080/api/dreams')
            .then(response => {
                dispatch({ type: GET_ALL_DREAMS, payload: response.data })
                console.log('******************')
                console.log('actions.js dispatch payload***: ', response.data);
            })
            .catch(err => {
                dispatch({ type: 'DISPLAY_ERROR_NOTIFICATION' })
            })
    }
}

//~~~ REQUEST TO POST A DREAM ~~~//

export const addDream = () => {
    console.log('******************')
    console.log('ACTION ADD HITTING?')

    return dispatch => {
        axios.post('post url goes here')
            .then(response => {
                dispatch({ ADD_DREAM, payload: response.data })
            })
            .catch(err => {
                console.log('ERROR in ACTION ADD DREAM')
            })
    }
}