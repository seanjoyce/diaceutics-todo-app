import { NextPage } from "next";
import { useState } from "react";

const AddTodo: NextPage = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<Date>();

  const onSubmit = (event: any) => {
    event.preventDefault();
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
