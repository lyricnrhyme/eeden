import dreams_db from '../mock_db/dreams'

export const GET_ALL_DREAMS = 'GET_ALL_DREAMS';
export const ADD_DREAM = 'ADD_DREAM';


//~~~ REQUEST TO GET ALL DREAMS ~~~//
export const getAllDreams = () => {
  return {
    type: GET_ALL_DREAMS,
    payload: dreams_db
  }
}

export const addDream = (dream) => {
  console.log('ACTION ADD HITTING?')
  console.log(dream);
  return {
    type: ADD_DREAM,
    payload: dream
  }
}