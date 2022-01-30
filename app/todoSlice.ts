import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../interfaces/Todo";

interface TodosState {
  todos: Todo[];
}

const initialState = {
  todos: [
    {
      title: "Title 1 SAME NAME",
      description: "Description 1",
      date: new Date(2022, 1, 10),
      completed: false,
    },
    {
      title: "Title 1 SAME NAME",
      description: "Description 1",
      date: new Date(2022, 0, 1),
      completed: false,
    },
    {
      title: "Title 2",
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
    setTodos(state, action: PayloadAction<Todo[]>) {
      state.todos = [...action.payload, ...state.todos];
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

export const { setTodos, addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
