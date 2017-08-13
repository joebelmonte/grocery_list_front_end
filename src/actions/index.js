import axios from  'axios'

export const FETCH_LISTS = 'fetch_lists'
export const CREATE_LIST = 'create_list'
export const FETCH_LIST = 'fetch_list'
export const DELETE_LIST = 'delete_list'

const ROOT_URL = 'http://localhost:4741'

export function fetchLists() {
  const request = axios.get(`${ROOT_URL}/lists`)

  return {
    type: FETCH_LISTS,
    payload: request
  }
}

export function createList(values, callback) {
  const data = {
    list: values
  }

  const request = axios.post(`${ROOT_URL}/lists`, data)
    .then(callback)

  return {
    type: CREATE_LIST,
    payload: request
  }
}

export function fetchList(id){
  const request = axios.get(`${ROOT_URL}/lists/${id}`)

  return {
    type: FETCH_LIST,
    payload: request
  }
}

export function deleteList(id, callback){
  const request = axios.delete(`${ROOT_URL}/lists/${id}`)
    .then(callback)

    return {
      type: DELETE_LIST,
      payload: id
    }
}
