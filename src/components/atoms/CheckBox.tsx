import React from "react";

interface Props<T> {
  children: React.ReactNode;
  checked: boolean;
  value: T;
  onCheck: (value: T) => void;
}

function CheckBox<T extends string | number>(props: Props<T>) {
  const { value, children, checked, onCheck } = props;
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.target.checked = !e.target.checked;
    onCheck(value);
  };
  return (
    <label className="float-left mr-2">
      <input
        className="accent-cyan-300"
        title="todo check #1"
        type="checkbox"
        checked={checked}
        value={value}
        onChange={onChange}
      />
      {children}
    </label>
  );
}

export default CheckBox;
