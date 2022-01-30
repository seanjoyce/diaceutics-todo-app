import { NextPage } from "next";
import { useDispatch } from "react-redux";
import { Todo } from "../interfaces/Todo";
import { addTodo } from "../app/todoSlice";
import TodoForm from "../components/TodoForm/TodoForm";

const AddTodo: NextPage = () => {
  const dispatch = useDispatch();

  const addTodoStore = (todo: Todo) => {
    dispatch(addTodo(todo));
  };

  return <TodoForm addTodo={addTodoStore}></TodoForm>;
};

export default AddTodo;
