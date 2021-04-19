import {
  combineReducers
} from 'redux';

import filtersReducer from "./features/filters/filtersSlice";
import todosReducer from "./features/todos/todosSlice";

// function nextTodoId(todos) {
//   const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
//   return maxId + 1
// }

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer
});

export default rootReducer;