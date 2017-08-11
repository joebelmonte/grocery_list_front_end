import _ from 'lodash'
import { FETCH_LISTS } from '../actions'

export default function(state = {}, action) {

  switch (action.type) {
    case FETCH_LISTS:
      return _.mapKeys(action.payload.data.lists, 'id')
    default:
      return state
  }
}
