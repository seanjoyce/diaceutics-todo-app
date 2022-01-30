import { NextPage } from "next";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Todo } from "../interfaces/Todo";
import { addTodo } from "../app/todoSlice";
import { v4 as uuidv4 } from "uuid";

const AddTodo: NextPage = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<Date>();

  const dispatch = useDispatch();

  const onSubmit = (event: any) => {
    event.preventDefault();

    const todo: Todo = {
      id: uuidv4(),
      title,
      description,
      date: new Date(2022, 1, 1),
      completed: false,
    };

    dispatch(addTodo(todo));
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
        <button className="btn btn-error mx-2">Cancel</button>
        <button type="submit" className="btn btn-primary">
          Add todo
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
