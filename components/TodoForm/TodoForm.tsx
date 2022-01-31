import React, { useState } from "react";
import { Todo } from "../../interfaces/Todo";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/router";

export default function TodoForm(props: any) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<Date | null>(new Date());

  const router = useRouter();

  const onSubmit = (event: any) => {
    event.preventDefault();

    const todo: Todo = {
      id: uuidv4(),
      title,
      description,
      date: date?.toString() ?? new Date().toString(),
      completed: false,
    };
    props.addTodo(todo);
    router.push("/");
  };

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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>

      <div className="mb-3">
        <label htmlFor="date" className="form-label">
          Due Date
        </label>
        <DatePicker selected={date} onChange={(newDate) => setDate(newDate)} />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="title"
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className="d-flex justify-content-end">
        <Link href="/" passHref={true}>
          <button className="btn btn-error mx-2">Cancel</button>
        </Link>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!title || !description}
        >
          Add todo
        </button>
      </div>
    </form>
  );
}
