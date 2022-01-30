import React from "react";
import { useSelector } from "react-redux";
import { Todo } from "../../interfaces/Todo";
import TodoItem from "../TodoItem/TodoItem";
import { RootState } from "../../interfaces/RootState";

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todoState.todos) ?? [];

  return (
    <div>
      {todos.map((todo: Todo, index: number) => (
        <TodoItem
          id={todo.id}
          title={todo.title}
          description={todo.description}
          date={todo.date}
          completed={todo.completed}
          key={index}
        ></TodoItem>
      ))}
    </div>
  );
}
