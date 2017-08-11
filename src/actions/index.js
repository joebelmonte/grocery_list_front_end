import axios from  'axios'

export const FETCH_LISTS = 'fetch_lists'

const ROOT_URL = 'http://localhost:4741'

export function fetchLists() {
  const request = axios.get(`${ROOT_URL}/lists`)

  return {
    type: FETCH_LISTS,
    payload: request
  }
}
