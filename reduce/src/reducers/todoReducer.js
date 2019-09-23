export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 8675309
    },
    {
      item: "Learn Python",
      completed: true,
      id: 8573822
    },
    {
      item: "Go to the gym",
      completed: false,
      id: 5839359
    }
  ]
};

export const todoReducer = (state, action) => {
  let newTodo = {
    item: action.payload,
    completed: false,
    id: Date.now()
  };
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.payload.id === todo.id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
};