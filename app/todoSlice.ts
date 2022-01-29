import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../interfaces/Todo";

interface TodosState {
  todos: Todo[];
}

const initialState = {} as TodosState;

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos(state, action: PayloadAction<Todo[]>) {
      state.todos = [...action.payload];
    },
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos = [action.payload, ...state.todos];
    },
    removeTodo(state, action: PayloadAction<Todo>) {
      state.todos = state.todos.filter((todo) => todo !== action.payload);
    },
  },
});

export const { setTodos, addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
