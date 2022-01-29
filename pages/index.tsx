import type { NextPage } from "next";
import { useEffect, useState } from "react";
import TodoItem from "../components/Todo/TodoItem";
import { Todo } from "../interfaces/Todo";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch("api/todo")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div className={styles.container}>
      {todos.map((todo: Todo) => (
        <TodoItem
          title={todo.title}
          description={todo.description}
          date={todo.date}
          completed={todo.completed}
        ></TodoItem>
      ))}
    </div>
  );
};

export default Home;
