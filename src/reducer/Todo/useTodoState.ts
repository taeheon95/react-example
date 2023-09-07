import { useReducer } from "react";
import { initialState } from "./TodoInitial";
import { todoReducer } from "./TodoReducer";

function useTodoState() {
  const [todoState, dispatch] = useReducer(todoReducer, initialState);

  return todoState;
}

export default useTodoState;
