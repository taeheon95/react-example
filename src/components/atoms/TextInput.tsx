import React from "react";

interface Props {
  input: string;
  onChange: (value: string) => void;
}

function TextInput(props: Props) {
  const { input, onChange } = props;
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(e.target.value);
  };
  return (
    <input
      className="border-solid border-2 rounded-md m-1"
      title="add todo input"
      value={input}
      onChange={handleChange}
    />
  );
}

export default TextInput;
