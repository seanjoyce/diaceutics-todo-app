import type { NextPage } from "next";
import { useEffect, useState } from "react";
import TodoItem from "../components/Todo/TodoItem";
import { Todo } from "../interfaces/Todo";

const Home: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("api/todo")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  return (
    <div>
      {todos.map((todo: Todo) => (
        <TodoItem
          title={todo.title}
          description={todo.description}
          date={todo.date}
        ></TodoItem>
      ))}
    </div>
  );
};

export default Home;
