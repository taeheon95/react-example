import { TodoState } from "./TodoInitial";

export const actionFunctions = {
  ADD_TODO: (state: TodoState) => {
    const id = state.todoList.at(-1)?.id ?? 0 + 1;
    const newTodo = {
      id,
      contents: state.input,
      done: false,
      isEdit: false,
    };
    state.input = "";
    state.todoList.push(newTodo);
    state.count = state.todoList.length;
  },
  CHANGE_TODO_INPUT: (state: TodoState, value: string) => {
    state.input = value;
  },
  CHANGE_TODO_FILTER: (
    state: TodoState,
    value: "all" | "done" | "not done"
  ) => {
    state.filter = value;
  },
  CHANGE_TODO_IS_DONE: (
    state: TodoState,
    value: { idx: number; done: boolean }
  ) => {
    if (value.idx > -1) {
      state.todoList[value.idx].done = value.done;
    }
  },
  CHANGE_TODO_CONTENTS: (
    state: TodoState,
    value: { idx: number; contents: string }
  ) => {
    state.todoList[value.idx].contents = value.contents;
  },
  DELETE_TODO: (state: TodoState, idx: number) => {
    state.todoList.splice(idx, 1);
  },
};
