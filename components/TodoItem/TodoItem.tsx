import React from "react";
import styles from "./TodoItem.module.scss";
import { Todo } from "../../interfaces/Todo";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../app/todoSlice";
import { MdDelete, MdEdit } from "react-icons/md";
import Link from "next/link";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { id, title, description, date, completed } = todo;
  const dispatch = useDispatch();

  function completeTodo() {
    dispatch(toggleTodo(todo));
  }

  function deleteTodo() {
    dispatch(removeTodo(todo));
  }

  return (
    <div className={styles.todo}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id="completed"
          name="completed"
          checked={completed}
          onChange={completeTodo}
        ></input>
      </div>

      <div className="flex-grow-1">
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <div className={styles.date}>
            {new Date(date).toLocaleDateString()}
          </div>
        </div>
        <div>{description}</div>
      </div>

      <div className="actions">
        <Link
          passHref={true}
          href={{
            pathname: "/edit-todo/[id]",
            query: { id: todo.id },
          }}
        >
          <a>
            <MdEdit className={styles.edit} />
          </a>
        </Link>

        <MdDelete className={styles.delete} onClick={deleteTodo} />
      </div>
    </div>
  );
}
