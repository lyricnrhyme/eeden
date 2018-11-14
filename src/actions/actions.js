import axios from 'axios';

export const GET_ALL_USERS = 'GET_ALL_USERS';

export const GET_ALL_DREAMS = 'GET_ALL_DREAMS';
export const ADD_DREAM = 'ADD_DREAM';
export const GET_DREAM_BY_ID = 'GET_DREAM_BY_ID';

export const GET_ALL_STORES = 'GET_ALL_STORES';




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
    console.log('ACTION GET HITTING')

    return dispatch => {
        axios.get('http://34.219.218.138:8080/api/dreams')
            .then(response => {
                dispatch({ type: GET_ALL_DREAMS, payload: response.data })
                // console.log('actions.js dispatch payload: ', response.data);
            })
            .catch(err => {
                dispatch({ type: 'DISPLAY_ERROR_NOTIFICATION' })
            })
    }
}

//~~~ REQUEST TO GET A DREAM BY ITS ID ~~~//
export const getDream = (id) => {
    console.log('ACTION GET BY ID FIRING', id)

    return dispatch => {

        // axios.get('http://34.219.218.138:8080/api/dreams/' + id)
        axios.get(`http://34.219.218.138:8080/api/dreams/${id}`)
            .then(response => {
                console.log('ACTION DREAM BY ID DATA: ', response.data)
                dispatch({ type: GET_DREAM_BY_ID, payload: response.data })
            })
            .catch(err => {
                console.log('ERROR IN GETTING INDIVIDUAL DREAM')
            })
    }
}


//~~~ REQUEST TO POST A DREAM ~~~//
export const addDream = () => {
    console.log('ACTION ADD HITTING')

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


//~~~~~~~~~~ DREAM ACTIONS ~~~~~~~~~~//
//~~~ REQUEST TO GET ALL STORES ~~~//
export const getAllStores = () => {
    console.log('ACTION GET STORES HITTING');

    return dispatch => {
        axios.get('http://34.219.218.138:8080/api/stores')
            .then(response => {
                dispatch({ type: GET_ALL_STORES, payload: response.data })
                console.log('actions.js dispatch payload: ', response.data)
            })
            .catch(err => {
                console.log('ERROR IN ACTION GET ALL STORES');
            })
    }
}

