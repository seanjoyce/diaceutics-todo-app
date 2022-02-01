import React, { useEffect, useState } from "react";
import { Todo } from "../../interfaces/Todo";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../app/todoSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../../interfaces/RootState";
import { readSync } from "fs";
import Link from "next/link";

export default function TodoForm(props: any) {
  const [todo, setTodo] = useState<Todo>({
    id: null,
    title: "",
    description: "",
    date: new Date().toISOString(),
    completed: false,
  });
  const todos = useSelector((state: RootState) => state.todoState.todos);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      if (id) {
        const foundTodo = todos.find((todo) => id === todo.id);
        if (foundTodo) setTodo(foundTodo);
      }
    }
  }, [router, todos]);

  const onSubmit = (event: any) => {
    event.preventDefault();
    if (!todo.id) todo.id = uuidv4();
    if (router.pathname === "/add-todo") {
      props.addTodo(todo);
    } else {
      props.editTodo(todo);
    }
    router.push("/");
  };

  if (todo) {
    return (
      <form className="add-form" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          ></input>
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Due Date
          </label>
          <DatePicker
            selected={new Date(todo.date)}
            onChange={(newDate) =>
              setTodo({ ...todo, date: newDate?.toString() ?? "" })
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="title"
            rows={5}
            value={todo.description}
            onChange={(e) =>
              setTodo({ ...todo, description: e.currentTarget.value })
            }
          ></textarea>
        </div>

        <div className="d-flex justify-content-end">
          <Link href="/" passHref={true}>
            <button className="btn btn-error mx-2">Cancel</button>
          </Link>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={!todo.title || !todo.description}
          >
            {todo.id === null ? "Add todo" : "Update todo"}
          </button>
        </div>
      </form>
    );
  } else return null;
}
