import axios from 'axios';

export const GET_ALL_USERS = 'GET_ALL_USERS';
export const ADD_USER = 'ADD_USER';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';


export const GET_ALL_DREAMS = 'GET_ALL_DREAMS';
export const ADD_DREAM = 'ADD_DREAM';
export const GET_DREAM_BY_ID = 'GET_DREAM_BY_ID';
export const GET_DREAM_BY_STORE_ID = 'GET_DREAM_BY_STORE_ID';
export const GET_DREAM_BY_USER_ID = 'GET_DREAM_BY_USER_ID';
export const EDIT_DREAM = 'EDIT_DREAM';
export const DELETE_DREAM = 'DELETE_DREAM';


export const GET_ALL_STORES = 'GET_ALL_STORES';
export const GET_STORE_BY_ID = 'GET_STORE_BY_ID';
export const GET_STORE_BY_USER_ID = 'GET_STORE_BY_USER_ID';
export const ADD_STORE = 'ADD_STORE';
export const EDIT_STORE = 'EDIT_STORE';


export const GET_ALL_PURCHASES = 'GET_ALL_PURCHASES';
export const GET_PURCHASE_BY_ID = 'GET_PURCHASE_BY_ID';
export const ADD_PURCHASE = 'ADD_PURCHASE';



//~~~~~~~~~~ USER ACTIONS ~~~~~~~~~~//
export const getAllUsers = () => {
    return dispatch => {
        axios.get('http://ohanadaily.com:8080/api/users')
            .then(items => {
                dispatch({
                    type: GET_ALL_USERS,
                    task: items.data
                })
            })
    }
}

//~~~ REQUEST TO GET A USER BY ITS ID ~~~//
export const getUser = (id) => {

    return dispatch => {
        // axios.get('http://34.219.218.138:8080/api/dreams/' + id)
        axios.get(`http://ohanadaily.com:8080/api/users/${id}`)
            .then(response => {
                // console.log('ACTION USER BY ID DATA: ', response.data)
                dispatch({ type: GET_USER_BY_ID, payload: response.data })
            })
            .catch(err => {
                console.log('ERROR IN GETTING INDIVIDUAL USER')
            })
    }
}

//~~~ REQUEST TO POST A USER ~~~//
export const addUser = (user) => {
    console.log('ACTION ADD HITTING')

    return dispatch => {
        axios.post('http://ohanadaily.com:8080/register', user)
            .then(response => {
                console.log('new user', user);
                dispatch({ type: ADD_USER, payload: response.data })
            })
            .catch(err => {
                console.log('ERROR in ACTION ADD USER')
            })
    }
}

//~~~~~~~~~~ DREAM ACTIONS ~~~~~~~~~~//
//~~~ REQUEST TO GET ALL DREAMS ~~~//
export const getAllDreams = () => {

    return dispatch => {
        axios.get('http://ohanadaily.com:8080/api/dreams')
            .then(response => {
                dispatch({ type: GET_ALL_DREAMS, payload: response.data })
            })
            .catch(err => {
                dispatch({ type: 'DISPLAY_ERROR_NOTIFICATION' })
            })
    }
}

//~~~ REQUEST TO GET A DREAM BY ITS ID ~~~//
export const getDream = (id) => {
    // console.log('ACTION GET BY ID FIRING', id)

    return dispatch => {
        axios.get(`http://ohanadaily.com:8080/api/dreams/${id}`)
            .then(response => {
                dispatch({ type: GET_DREAM_BY_ID, payload: response.data[0] })
            })
            .catch(err => {
                console.log('ERROR IN GETTING INDIVIDUAL DREAM', err)
            })
    }
}

//~~~ REQUEST TO GET A DREAM BY STORE ID ~~~//
export const getDreamByStore = (id) => {
    // console.log('ACTION GET BY ID FIRING', id)

    return dispatch => {
        // axios.get('http://34.219.218.138:8080/api/dreams/' + id)
        axios.get(`http://ohanadaily.com:8080/api/dreams/`)

            .then(response => {
                const dreams = response.data.filter(dream => {
                    // console.log('inception', dream)
                    return id.toString() === (dream.store_id.id).toString()
                })
                // console.log('ACTION DREAM BY ID DATA: ', dreams)
                dispatch({ type: GET_DREAM_BY_STORE_ID, payload: dreams })
            })
            .catch(err => {
                console.log('ERROR IN GETTING INDIVIDUAL DREAM')
            })
    }
}

//~~~ REQUEST TO GET A DREAM BY USER ID ~~~//
export const getDreamsByUser = (id) => {
    // console.log('ACTION GET DREAM BY USER ID FIRING', id)

    return dispatch => {
        axios.get(`http://ohanadaily.com:8080/api/dreams/`)

            .then(response => {
                const dreams = response.data.filter(dream => {
                    // console.log('insheeption', dream)
                    return id.toString() === (dream.user_id.id).toString()
                })
                // console.log('ACTION DREAM BY ID DATA: ', dreams)
                dispatch({ type: GET_DREAM_BY_USER_ID, payload: dreams })
            })
            .catch(err => {
                console.log('ERROR IN GETTING INDIVIDUAL DREAM')
            })
    }
}

//~~~ REQUEST TO EDIT A DREAM ~~~//
export const editDream = (id, data) => {
    console.log('ACTION EDIT DREAM FIRED ;)')
    console.log("object:", data);

    return dispatch => {
        axios.put(`http://ohanadaily.com:8080/api/dreams/edit_dream/${id}`, data)
            .then(response => {
                console.log('ACTION EDIT DATA: ', response.data)
                dispatch({ type: EDIT_DREAM, payload: response.data })
            })
            .catch(err => {
                console.log('ERROR IN EDIT DREAM', err);
            })
    }
}

//~~~ REQUEST TO POST A DREAM ~~~//
export const addDream = (dream) => {
    console.log('ACTION ADD DREAM HITTING')
    // console.log('ACTION DREAM PARAM: ', dream);

    return dispatch => {
        axios.post('http://ohanadaily.com:8080/api/dreams/new_dream')
            .then(response => {
                console.log('ADD DREAM RESPONSE: ', response.data);
                dispatch({ ADD_DREAM, payload: response.data })
            })
            .catch(err => {
                console.log('ERROR in ACTION ADD DREAM', err)
            })
    }
}

//~~~ REQUEST TO DELETE A DREAM ~~~//
export const deleteDream = (id) => {
    // console.log('ACTION DELETE DREAM HIT');

    return dispatch => {
        axios.delete('http://ohanadaily.com:8080/api/dreams/delete_dream', { data: { id } })
            .then(response => {
                console.log("response: ", response.data);
                dispatch({ type: DELETE_DREAM, payload: id })
            })
            .catch(err => {
                console.log('ERROR IN DELETE ', err)
            })
    }
}


//~~~~~~~~~~ STORE ACTIONS ~~~~~~~~~~//
//~~~ REQUEST TO GET ALL STORES ~~~//
export const getAllStores = () => {
    // console.log('ACTION GET STORES HITTING');

    return dispatch => {
        axios.get('http://ohanadaily.com:8080/api/stores')
            .then(response => {
                dispatch({ type: GET_ALL_STORES, payload: response.data })
                console.log('actions.js dispatch payload: ', response.data)
            })
            .catch(err => {
                console.log('ERROR IN ACTION GET ALL STORES');
            })
    }
}

//~~~ REQUEST TO GET A STORE BY ITS ID ~~~//
export const getStore = (id) => {
    // console.log('ACTION GET BY ID FIRING', id)

    return dispatch => {
        axios.get(`http://ohanadaily.com:8080/api/stores/${id}`)
            .then(response => {
                // console.log('ACTION STORE DATA: ', response.data)
                dispatch({ type: GET_STORE_BY_ID, payload: response.data })
            })
            .catch(err => {
                console.log('ERROR IN GETTING INDIVIDUAL STORE');
            })
    }
}

//~~~ REQUEST TO EDIT A STORE ~~~//
export const editStore = (id, data) => {

    return dispatch => {
        axios.put(`http://ohanadaily.com:8080/api/stores/edit_store/${id}`, data)
            .then(response => {
                // console.log('ACTION EDIT DATA: ', response.data)
                dispatch({ type: EDIT_STORE, payload: response.data })
            })
            .catch(err => {
                console.log('ERROR IN EDIT STORE', err);
            })
    }
}

//~~~ REQUEST TO ADD A NEW STORE ~~~//
export const addStore = (store) => {
    // console.log('ACTION ADD STORE FIRED');
    // console.log("ACTION STORE PARAM: ", store)
    return dispatch => {
        axios.post("http://ohanadaily.com:8080/api/stores/create_store", store)
            .then(response => {
                // console.log('ADD STORE RESPONSE: ', response.data)
                dispatch({ type: ADD_STORE, payload: response.data })
            })
            .catch(err => {
                console.log("ERROR IN ACTION ADD STORE")
            })
    }
}

//~~~ REQUEST TO GET A STORE BY USER ID ~~~//
export const getStoreByUser = (id) => {
    // console.log('ACTION GET BY ID FIRING', id)

    return dispatch => {
        // axios.get('http://34.219.218.138:8080/api/dreams/' + id)
        axios.get(`http://ohanadaily.com:8080/api/stores/`)

            .then(response => {
                const stores = response.data.filter(store => {
                    // console.log('inception', dream)
                    return id.toString() === (store.created_by.id).toString()
                })
                // console.log('ACTION DREAM BY ID DATA: ', stores[0])
                dispatch({ type: GET_STORE_BY_USER_ID, payload: stores })
            })
            .catch(err => {
                console.log('ERROR IN GETTING INDIVIDUAL STORE')
            })
    }
}


//~~~~~~~~~~ PURCHASE ACTIONS ~~~~~~~~~~//
//~~~ REQUEST TO GET ALL PURCHASES ~~~//
export const getAllPurchases = () => {
    return dispatch => {
        axios.get('http://ohanadaily.com:8080/api/purchased')
            .then(items => {
                // console.log('hello?', items);
                dispatch({
                    type: GET_ALL_PURCHASES,
                    task: items.data
                })
            })
    }
}

//~~~ REQUEST TO GET A PURCHASE BY ITS ID ~~~//
export const getPurchase = (id) => {
    // console.log('ACTION GET BY ID FIRING', id)

    return dispatch => {
        axios.get(`http://ohanadaily.com:8080/api/purchased/${id}`)
            .then(response => {
                console.log('ACTION PURCHASE BY ID DATA: ', response.data)
                dispatch({ type: GET_PURCHASE_BY_ID, payload: response.data })
            })
            .catch(err => {
                console.log('ERROR IN GETTING INDIVIDUAL PURCHASE')
            })
    }
}

//~~~ REQUEST TO POST A PURCHASE ~~~//
export const addPurchase = () => {
    console.log('ACTION ADD HITTING')

    return dispatch => {
        axios.post('http://ohanadaily.com:8080/api/purchased/new_purchase')
            .then(response => {
                dispatch({ type: ADD_PURCHASE, payload: response.data })
            })
            .catch(err => {
                console.log('ERROR in ACTION ADD PURCHASE')
            })
    }
}

export const logout = () => {
    localStorage.clear();
}