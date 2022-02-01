import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../interfaces/Todo";
import { v4 as uuidv4 } from "uuid";

interface TodosState {
  todos: Todo[];
}

const initialState = {
  todos: [
    {
      id: uuidv4(),
      title: "Do the dishes",
      description: "Description 1",
      date: new Date(2022, 1, 10).toString(),
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Take out the bins",
      description: "Description 1",
      date: new Date(2022, 0, 1).toString(),
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Pay bills",
      description: "Description 2",
      date: new Date(2022, 1, 5).toString(),
      completed: false,
    },
  ],
} as TodosState;

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    hydrate: (_state, action) => {
      return action.payload;
    },
    addTodo(state, action) {
      state.todos.unshift(action.payload);
    },
    removeTodo(state, action) {
      state.todos = current(state).todos.filter(
        (todo) => todo.id !== action.payload.id
      );
    },
    updateTodo(state, action) {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index] = action.payload;
    },
    toggleTodo(state, action) {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) todo.completed = !todo.completed;
    },
  },
});

export const { hydrate, addTodo, removeTodo, updateTodo, toggleTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
