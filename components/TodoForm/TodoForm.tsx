import React, { useEffect, useState } from "react";
import styles from "./TodoForm.module.scss";
import { Todo } from "../../interfaces/Todo";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../app/todoSlice";
import DatePicker from "react-datepicker";

interface TodoItemProps {
  todo?: Todo;
  closeAddTodo: () => void;
}

export default function TodoForm({ todo, closeAddTodo }: TodoItemProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<Date | null>(new Date());

  const dispatch = useDispatch();

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
      setDate(new Date(todo.date));
    }
  }, [todo]);

  function addNewTodo() {
    const todo: Todo = {
      id: uuidv4(),
      title,
      description,
      date: date?.toString() ?? new Date().toString(),
      completed: false,
    };
    dispatch(addTodo(todo));
  }

  function editTodo() {
    if (todo) {
      const updatedTodo: Todo = {
        id: todo.id,
        title,
        description,
        date: date?.toString() ?? new Date().toString(),
        completed: todo.completed,
      };
      dispatch(updateTodo(updatedTodo));
    }
  }

  const onSubmit = (event: any) => {
    event.preventDefault();
    if (todo) {
      editTodo();
    } else {
      addNewTodo();
    }
    dispatch(addTodo(todo));
    closeAddTodo();
  };

  return (
    <div className={styles.todo}>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Due Date
          </label>
          <DatePicker
            selected={date}
            onChange={(newDate) => setDate(newDate)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="title"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-error mx-2"
            onClick={() => closeAddTodo()}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!title || !description}
          >
            Add todo
          </button>
        </div>
      </form>
    </div>
  );
}
