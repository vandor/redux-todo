import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import todos from './todos'

export default combineReducers({
  visibilityFilter,
  todos,
})
