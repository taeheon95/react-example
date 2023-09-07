import { actionFunctions } from "./TodoActions";
import { Payload, TodoState } from "./TodoInitial";

export function todoReducer(state: TodoState, payload: Payload) {
  const newState: TodoState = {
    ...state,
    todoList: state.todoList.map((todo) => ({ ...todo })),
  };
  const { action } = payload;

  switch (action) {
    case "ADD_TODO":
      actionFunctions[action](newState);
      break;
    case "CHANGE_TODO_INPUT":
      actionFunctions[action](newState, payload.value);
      break;
    case "CHANGE_TODO_FILTER":
      actionFunctions[action](newState, payload.value);
      break;
    case "CHANGE_TODO_IS_DONE":
      actionFunctions[action](newState, payload.value);
      break;
    case "CHANGE_TODO_CONTENTS":
      actionFunctions[action](newState, payload.value);
      break;
    case "DELETE_TODO":
      actionFunctions[action](newState, payload.value);
      break;
  }

  return newState;
}
