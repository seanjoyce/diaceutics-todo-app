import TodoForm from "./TodoForm";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../app/store";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("TodoForm", () => {
  useRouter.mockImplementationOnce(() => ({
    pathname: "/",
  }));
  it("renders the form", () => {
    render(
      <Provider store={store}>
        <TodoForm></TodoForm>
      </Provider>
    );
  });
});
