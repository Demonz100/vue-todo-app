import type { Todo } from "./Todo.Interface";

export interface TodoStore {
  todos: Todo[]
  isLoading: Boolean
  showToast: Boolean
}
