import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {

    //Reducer to add a task to the todo list
    addTodo: (state, action) => {
      const todo = { 
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo);
    },

    //Reducer to remove a task from the todo list
    removeTodo: (state, action) => {
      console.log(state);
      console.log(action);
      state.todos = state.todos.filter(todo => (
        todo.id !== action.payload
      ))
      console.log(state.todos);
    }
  }
})

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;