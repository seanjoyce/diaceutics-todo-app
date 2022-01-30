import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Todo } from "../../interfaces/Todo";
import TodoItem from "../TodoItem/TodoItem";
import { setTodos } from "../../app/todoSlice";
import { RootState } from "../../interfaces/RootState";

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todoState.todos) ?? [];
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo: Todo, index: number) => (
        <TodoItem
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
