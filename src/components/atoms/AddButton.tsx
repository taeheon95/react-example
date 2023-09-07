import React from "react";

interface Props {
  onAdd: () => void;
}

function AddButton(props: Props) {
  const { onAdd } = props;
  return (
    <button className="bg-teal-500 rounded-lg p-1" onClick={onAdd}>
      추가하기
    </button>
  );
}

export default AddButton;
