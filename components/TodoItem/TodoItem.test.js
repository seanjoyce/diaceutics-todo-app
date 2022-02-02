import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../app/store";
import TodoItem from "./TodoItem";

const todo = {
  id: "1",
  title: "test",
  description: "description 1",
  date: new Date(),
  completed: false,
};

describe("TodoItem", () => {
  it("renders the todo item", () => {
    render(
      <Provider store={store}>
        <TodoItem todo={todo}></TodoItem>
      </Provider>
    );

    const todos = screen.getByText("test");
    expect(todos).toBeTruthy();
  });
});
