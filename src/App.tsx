import React, { useState, useEffect } from "react";
import TodoItem from "./components/organisms/TodoItem";
import AddTodo from "./components/molecules/AddTodo";

function App() {
  const [doneTodoList, setDoneTodoList] = useState<Set<number>>(new Set());

  const onCheck = (value: number) => {
    if (doneTodoList.has(value)) {
      doneTodoList.delete(value);
      setDoneTodoList(new Set(doneTodoList));
    } else {
      doneTodoList.add(value);
      setDoneTodoList(new Set(doneTodoList));
    }
  };

  useEffect(() => {
    console.log(doneTodoList);
  }, [doneTodoList]);

  return (
    <>
      <div className="bg-gray-500 w-96 p-3 rounded-md">
        <div className="m-1">
          <select className="bg-gray-300 rounded-md" title="select filter">
            <option>all</option>
            <option>done</option>
            <option>not done</option>
          </select>
          <AddTodo
            onAddTodo={(value) => {
              console.log(value);
            }}
          />
        </div>
        <ul className="list-none bg-green-400 w-[346px] rounded-md p-1 m-1">
          {Array.from({ length: 4 }, (_, i) => (
            <TodoItem
              key={i + 1}
              idx={i}
              id={i + 1}
              idSet={doneTodoList}
              contents="0123456789012345678901234567890123456789"
              onCheck={onCheck}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
