import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Todo } from "../../interfaces/Todo";
import TodoItem from "../TodoItem/TodoItem";
import { RootState } from "../../interfaces/RootState";
import TodoForm from "../TodoForm/TodoForm";

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todoState.todos) ?? [];
  const [displayAddTodo, setDisplayAddTodo] = useState(false);
  const [displayEditTodo, setDisplayEditTodo] = useState(false);

  function toogleAddTodo(state: boolean) {
    setDisplayAddTodo(state);
  }

  function toggleEditTodo(state: boolean) {
    setDisplayEditTodo(state);
  }

  function displayList(): boolean {
    return !displayAddTodo && !displayEditTodo;
  }

  return (
    <div>
      {todos.map((todo: Todo, index: number) => (
        <TodoItem data-testid="todo-item" todo={todo} key={index}></TodoItem>
      ))}
    </div>
  );
}
