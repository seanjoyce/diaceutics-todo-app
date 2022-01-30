import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../interfaces/Todo";
import store from "./store";

interface TodosState {
  todos: Todo[];
}

const initialState = {
  todos: [
    {
      title: "Do the dishes",
      description: "Description 1",
      date: new Date(2022, 1, 10),
      completed: false,
    },
    {
      title: "Take out the bins",
      description: "Description 1",
      date: new Date(2022, 0, 1),
      completed: false,
    },
    {
      title: "Pay bills",
      description: "Description 2",
      date: new Date(2022, 1, 5),
      completed: false,
    },
  ],
} as TodosState;

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    hydrate: (state, action) => {
      return action.payload;
    },
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos = [action.payload, ...state.todos];
    },
    removeTodo(state, action: PayloadAction<Todo>) {
      state.todos = state.todos.filter((todo) => todo !== action.payload);
    },
    toggleTodo(state, action: PayloadAction<Todo>) {
      const todo = state.todos.find((todo) => todo === action.payload);
      if (todo) todo.completed = action.payload.completed;
    },
  },
});

export const { hydrate, addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
