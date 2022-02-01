import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../app/store";
import TodoItem from "./TodoItem";

describe("TodoItem", () => {
  it("renders the todo item", () => {
    render(
      <Provider store={store}>
        <TodoItem></TodoItem>
      </Provider>
    );

    const todos = screen.getByText("Take out the bins");
    expect(todos).toBeTruthy();
  });
});
