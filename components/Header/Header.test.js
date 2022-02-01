import Header from "./Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Header", () => {
  it("renders a heading", () => {
    useRouter.mockImplementationOnce(() => ({
      pathname: "/",
    }));
    render(<Header></Header>);
    const title = screen.getByTestId("heading-title");
    expect(title).toHaveTextContent("Todos App");
  });

  it("Hides the add todo button when not on the home page", () => {
    useRouter.mockImplementationOnce(() => ({
      pathname: "/add-todo",
    }));
    render(<Header></Header>);
    const title = screen.queryByTestId("add-button");
    expect(title).toBeNull();
  });
});
