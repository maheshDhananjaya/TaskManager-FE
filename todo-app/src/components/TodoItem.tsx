import React, { FC } from "react";
interface ITodoItem {
  title: string;
  handleTaskDelete: (id: string) => void;
  id: string;
}
const TodoItem: FC<ITodoItem> = ({ title, handleTaskDelete, id }) => {
  return (
    <div className="px-8 py-4 border solid rounded-sm flex justify-between">
      <span>{title}</span>
      <span
        onClick={() => handleTaskDelete(id)}
        className="border sold rounded-xs px-1"
      >
        Delete
      </span>
    </div>
  );
};

export default TodoItem;
