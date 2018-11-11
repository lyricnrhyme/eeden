let users_db = [{
    'user_id': 1,
    'email': 'abc@123.com',
    'password': 'password'
}, {
    'user_id': 2,
    'email': 'def@456.com',
    'password': 'password2'
}]

// let newId = 3;

export const getUsersFromDB = () => new Promise((resolve, reject) => {
    resolve(users_db.slice())
})

export const getUserByIdFromDB = (id) => new Promise((resolve, reject) => {
    resolve(users_db.filter(x => x.user_id === id)[0])
})

export default users_db;