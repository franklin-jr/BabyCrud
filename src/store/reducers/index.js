import { combineReducers } from 'redux'
import { auth } from './auth_reducer'
import { shared } from './shared_reducer'
import { alert } from './alerts_reducer'
import { users } from './users_reducer'

const rootReducer = combineReducers({
  auth,
  shared,
  alert,
  users
});

export default rootReducer;