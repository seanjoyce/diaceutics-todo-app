import { NextPage } from "next";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../app/todoSlice";
import TodoForm from "../../components/TodoForm/TodoForm";
import { Todo } from "../../interfaces/Todo";


const EditTodo: NextPage = () => {
  const dispatch = useDispatch();

  const editTodo = (todo: Todo) => {
    dispatch(updateTodo(todo));
  };

  return <TodoForm editTodo={editTodo}></TodoForm>;
};

export default EditTodo;
