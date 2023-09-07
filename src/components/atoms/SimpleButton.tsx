import React from "react";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

function SimpleButton(props: Props) {
  return (
    <button className="mr-1" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default SimpleButton;
