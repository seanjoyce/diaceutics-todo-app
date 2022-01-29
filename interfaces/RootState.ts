import { Todo } from "./Todo";

export interface RootState {
  todoState: { todos: Todo[] };
}
