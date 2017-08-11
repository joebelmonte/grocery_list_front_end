import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import ListsReducer from './reducer_lists'


const rootReducer = combineReducers({
  lists: ListsReducer,
  form: formReducer
});

export default rootReducer;
