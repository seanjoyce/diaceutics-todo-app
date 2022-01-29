import React from "react";
import styles from "./TodoItem.module.scss";
import { Todo } from "../../interfaces/Todo";
import { FiMoreHorizontal } from "react-icons/fi";

export default function TodoItem(props: Todo) {
  const { title, description, date, completed } = props;

  function toggleDropdown() {
    console.log("test");
  }

  return (
    <div className={styles.todo}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id="completed"
          name="completed"
          checked={completed}
        ></input>
      </div>

      <div className="flex-grow-1">
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <div className={styles.date}>{date}</div>
        </div>
        <div>{description}</div>
      </div>

      <div className="dropdown">
        <FiMoreHorizontal
          data-bs-toggle="dropdown"
          aria-expanded="false"
          id="moreDropdown"
          onClick={toggleDropdown}
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
