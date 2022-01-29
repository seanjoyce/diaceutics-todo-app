import React from "react";
import styles from "./TodoItem.module.scss";
import { Todo } from "../../interfaces/Todo";

export default function TodoItem(props: Todo) {
  const { title, description, date, completed } = props;
  return (
    <div className={styles.todo}>
      <input
        type="checkbox"
        id="completed"
        name="completed"
        className={styles.checkbox}
        checked={completed}
      ></input>
      <div>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <div className={styles.date}>{date}</div>
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
}
