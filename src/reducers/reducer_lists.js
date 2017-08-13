import _ from 'lodash'
import { FETCH_LISTS, FETCH_LIST, DELETE_LIST } from '../actions'

export default function(state = {}, action) {

  switch (action.type) {
    case DELETE_LIST:
      return _.omit(state, action.payload)
    case FETCH_LIST:
      console.log('action.payload.data ', action.payload.data)
      return { ...state, [action.payload.data.list.id]: action.payload.data.list }
    case FETCH_LISTS:
      return _.mapKeys(action.payload.data.lists, 'id')
    default:
      return state
  }
}
