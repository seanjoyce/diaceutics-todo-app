import React from "react";
import styles from "./TodoItem.module.scss";
import { Todo } from "../../interfaces/Todo";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../../app/todoSlice";
import { MdDelete, MdEdit } from "react-icons/md";

interface TodoItemProps {
  todo: Todo;
  openEditTodoForm: () => void;
}

export default function TodoItem({ todo, openEditTodoForm }: TodoItemProps) {
  const { id, title, description, date, completed } = todo;
  const dispatch = useDispatch();

  function toggleTodo() {
    dispatch(updateTodo(todo));
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
          onChange={toggleTodo}
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
        <MdEdit className={styles.edit} onClick={() => openEditTodoForm} />
        <MdDelete className={styles.delete} onClick={deleteTodo} />
      </div>
    </div>
  );
}
