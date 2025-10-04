import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

interface ITask {
  title: string;
  description: string;
  id: string;
}

const Todo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleTaskDelete = async (taskId: string) => {
    try {
      const response = await fetch(`${API_URL}/api/todos/${taskId}`, {
        method: "delete",
      }).then((res) => {
        if (res.ok) {
          getTaskList();
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getTaskList = async () => {
    try {
      const response = await fetch(`${API_URL}/api/todos`, {
        method: "get",
      });
      const data = await response.json();
      console.log(data);
      setTodoList(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTaskList();
  }, []);

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const request = {
      title,
      description,
    };
    setTitle("");
    setDescription("");

    try {
      const response = await fetch(`${API_URL}/api/todos`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });
      const data = await response.json();
      console.log(data);
      const newItem = {
        title: data.title,
        description: data.description,
        id: data._id,
      };
      setTodoList([...todoList, newItem]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col">
      <div className="border border solid rounded-sm py-10 px-40">
        <span className="text-2xl font-medium">Add Your Task Here</span>
        <form onSubmit={handleFormSubmit}>
          <div className="mt-16">
            <input
              type="text"
              name="title"
              className="border rounded-sm px-2 py-1"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="enter your next task"
            />
          </div>
          <div className="mt-4">
            <textarea
              name="description"
              className="w-full border rounded-sm px-2 py-1 overflow-y-hidden"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder="enter description"
            />
          </div>
          <div className="mt-4">
            <button type="submit" className="border rounded-sm px-2 py-1">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="my-4">
        <span className="text-2xl font-medium">Scheduled Task List</span>
      </div>
      {todoList.length > 0 ? (
        <div className="flex flex-col h-50 overflow-scroll overflow-x-hidden gap-4 p-4 border solid rounded-sm">
          {todoList.map((item) => {
            return (
              <TodoItem
                title={item.title}
                key={item.title}
                handleTaskDelete={handleTaskDelete}
                id={item.id}
              />
            );
          })}
        </div>
      ) : (
        <>empty list...</>
      )}
    </div>
  );
};

export default Todo;
