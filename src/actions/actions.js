import users_db from '../mock_db/users';

export const GET_ALL_USERS = 'GET_ALL_USERS';

export const getAllUsers = () => {
    return {
        type: GET_ALL_USERS,
        payload: users_db
    }
}