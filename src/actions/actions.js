// import users_db from '../mock_db/users';
import axios from 'axios';

export const GET_ALL_USERS = 'GET_ALL_USERS';

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