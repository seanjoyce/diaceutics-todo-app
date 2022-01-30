import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "../components/Header/Header";
import { Provider } from "react-redux";
import store from "../app/store";
import { hydrate } from "../app/todoSlice";

const getTodosFromLocalStorage = () => {
  try {
    const persistedState = localStorage.getItem("reduxState");
    if (persistedState) return JSON.parse(persistedState);
  } catch (e) {
    console.log(e);
  }
};

const todos = getTodosFromLocalStorage();
if (todos) {
  store.dispatch(hydrate(todos));
}

function MyApp({ Component, pageProps }: AppProps) {
  store.subscribe(() => {
    localStorage.setItem(
      "reduxState",
      JSON.stringify(store.getState().todoState)
    );
  });

  return (
    <Provider store={store}>
      <Header></Header>
      <div className="container">
        <Component {...pageProps} />{" "}
      </div>
    </Provider>
  );
}

export default MyApp;
