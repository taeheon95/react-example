import React from "react";
import CheckBox from "../atoms/CheckBox";
import SimpleButton from "../atoms/SimpleButton";

interface Props<T> {
  idx: number;
  id: T;
  idSet: Set<T>;
  contents: string;
  onCheck: (value: T) => void;
}

function TodoItem<T extends number | string>(props: Props<T>) {
  const { idx, id, idSet, contents, onCheck } = props;

  const [isEdit, setIsEdit] = React.useState(false);

  const onCancel = () => {
    if (isEdit) {
      setIsEdit(false);
    } else {
      console.log("delete");
    }
  };

  const onEdit = () => {
    setIsEdit(true);
  };

  const isDone = idSet.has(id);
  const cancelLine = isDone ? "line-through" : "";

  return (
    <li className="w-80 min-h-[40px] p-2 m-2 rounded-md bg-slate-400 flex">
      <CheckBox checked={isDone} value={id} onCheck={onCheck}>
        #{idx + 1}
      </CheckBox>
      <textarea
        className={"resize-none rounded-md w-[210px] " + cancelLine}
        disabled={!isEdit}
        title="todo edit"
        value={contents}
        onChange={() => {}}
      />
      <div className="float-right">
        {!isEdit && <SimpleButton onClick={onEdit}>✏️</SimpleButton>}
        {isEdit && <SimpleButton onClick={onCancel}>✔️</SimpleButton>}
        <SimpleButton onClick={onCancel}>❌</SimpleButton>
      </div>
    </li>
  );
}

export default TodoItem;
