let users_db = [{
    'user_id': 1,
    'email': 'abc@123.com',
    'password': 'password'
}]

let newId = 2;

export const getUsersFromDB = () => new Promise((resolve, reject) => {
    resolve(users_db.slice())
})

export const getUserByIdFromDB = (id) => new Promise((resolve, reject) => {
    resolve(users_db.filter(x => x.user_id === id)[0])
})

export default users_db;