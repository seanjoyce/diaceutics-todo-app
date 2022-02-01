import TodoList from "./TodoList";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../app/store";

describe("TodoList", () => {
  it("renders a heading", () => {
    render(
      <Provider store={store}>
        <TodoList></TodoList>
      </Provider>
    );

    const todos = screen.getAllByTestId("todo-item");
    console.log(todos);
  });
});
