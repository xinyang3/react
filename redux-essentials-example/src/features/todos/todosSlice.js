/*
 * @Author: xinyang3
 * @Date: 2021-04-16 15:59
 * @Descripttion: awesome description
 * @LastEditors: xinyang3
 * @LastEditTime: 2021-04-16 16:09
 */
const initState = [{
    id: 0,
    text: 'Learn React',
    completed: true
  },
  {
    id: 1,
    text: 'Learn Redux',
    completed: false,
    color: 'purple'
  },
  {
    id: 2,
    text: 'Build something fun!',
    completed: false,
    color: 'blue'
  }
];


function todosReducer(state = initState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false
          }
        ]
      }
    }
    case 'todos/todoToggled': {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload) {
            return todo
          }

          return {
            ...todo,
            completed: !todo.completed
          }
        })
      }
    }

    default:
      return state;
  }
}

export default todosReducer;