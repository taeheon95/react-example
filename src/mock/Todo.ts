import ApiManager from "../api/ApiManager";

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

class TodoApiMock {
  private todoList: Todo[] = [
    { id: 1, title: "", done: false },
    { id: 2, title: "", done: false },
    { id: 3, title: "", done: false },
    { id: 4, title: "", done: false },
    { id: 5, title: "", done: false },
  ];

  constructor(
    private readonly baseUrl: string,
    private readonly apiManager: ApiManager
  ) {}

  getTodoList() {
    return Promise.resolve(this.todoList);
  }

  getTodo(id: number) {
    return Promise.resolve({
      id,
      title: "",
      done: false,
    });
  }

  postTodo(body: Omit<Todo, "id">) {
    const id = this.todoList.at(-1)?.id ?? 0 + 1;
    this.todoList.push({
      id,
      ...body,
    });
    return Promise.resolve(id);
  }

  putTodo(id: number, body: Omit<Todo, "id">) {
    this.todoList = this.todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...body };
      }
      return { ...todo };
    });
    return Promise.resolve();
  }

  deleteTodo(id: number) {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
    return Promise.resolve();
  }
}

export default TodoApiMock;
