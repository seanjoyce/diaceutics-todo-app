import React from "react";
import styles from "./TodoItem.module.scss";
import { Todo } from "../../interfaces/Todo";
import { FiMoreHorizontal } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../../app/todoSlice";

export default function TodoItem(todo: Todo) {
  const { id, title, description, date, completed } = todo;
  const dispatch = useDispatch();

  function toggleTodo() {
    dispatch(updateTodo(todo));
  }

  return (
    <div className={styles.todo}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id="completed"
          name="completed"
          checked={completed}
          onChange={toggleTodo}
        ></input>
      </div>

      <div className="flex-grow-1">
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <div className={styles.date}>{date.toString()}</div>
        </div>
        <div>{description}</div>
      </div>

      <div className="dropdown">
        <FiMoreHorizontal
          data-bs-toggle="dropdown"
          aria-expanded="false"
          id="moreDropdown"
        />
        <ul className="dropdown-menu" aria-labelledby="moreDropdown">
          <li>
            <a className="dropdown-item">Action</a>
          </li>
          <li>
            <a className="dropdown-item">Another action</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
