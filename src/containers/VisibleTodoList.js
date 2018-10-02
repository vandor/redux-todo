import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import {
  toggleTodo,
  VisibilityFilters
} from '../actions'

const {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} = VisibilityFilters

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    case SHOW_ALL:
    default:
      return todos;
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id))
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList)

export default VisibleTodoList
