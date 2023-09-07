export interface TodoState {
  count: number;
  filter: "all" | "done" | "not done";
  input: string;
  todoList: {
    id: number;
    contents: string;
    done: boolean;
    isEdit: boolean;
  }[];
}

export const initialState: TodoState = {
  count: 0,
  filter: "all",
  input: "",
  todoList: [],
};

export type Payload =
  | { action: "ADD_TODO" }
  | { action: "CHANGE_TODO_INPUT"; value: string }
  | { action: "CHANGE_TODO_FILTER"; value: "all" | "done" | "not done" }
  | { action: "CHANGE_TODO_IS_DONE"; value: { idx: number; done: boolean } }
  | {
      action: "CHANGE_TODO_CONTENTS";
      value: { idx: number; contents: string };
    }
  | {
      action: "DELETE_TODO";
      value: number;
    };
