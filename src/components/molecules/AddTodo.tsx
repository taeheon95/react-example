import React, { useState } from "react";
import TextInput from "../atoms/TextInput";
import AddButton from "../atoms/AddButton";

interface Props {
  onAddTodo: (value: string) => void;
}

function AddTodo(props: Props) {
  const { onAddTodo } = props;
  const [todo, setTodo] = useState<string>("");

  const onChange = (value: string) => {
    setTodo(value);
  };

  const onAdd = () => {
    onAddTodo(todo);
  };

  return (
    <>
      <TextInput input={todo} onChange={onChange} />
      <AddButton onAdd={onAdd} />
    </>
  );
}

export default AddTodo;
