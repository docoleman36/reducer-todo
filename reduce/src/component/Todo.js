import React from "react";

const Todo = props => {
  return (
    <div
      className={`todo${props.data.completed ? " complete" : ""}`}
      onClick={props.toggle}
      style={{ textDecoration: props.data.completed ? "line-through" : "" }}
    >
      <p>{props.data.item}</p>
    </div>
  );
};

export default Todo;