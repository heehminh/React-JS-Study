import React from "react";
import { useState } from "react";

const List = React.memo(
  ({
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot,
    handleClick,
  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const handleCompleteChange = (id) => {
      let newToDoData = todoData.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      });
      setTodoData(newToDoData);
      localStorage.setItem("todoData", JSON.stringify(newToDoData));
    };

    const handleEditChange = (event) => {
      setEditedTitle(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.title = editedTitle;
        }
        return data;
      });
      localStorage.setItem("todoData", JSON.stringify(newTodoData));

      setTodoData(newTodoData);
      setIsEditing(false);
    };

    if (isEditing) {
      return (
        <div
          className={`flex items-center justify-between w-full px-4 py-1 bg-gray-100 text-gray-600 border rounded`}
        >
          <form onSubmit={handleSubmit}>
            <input
              className="w-full px-3 py-2 mr-4 ml-4 text-gray-500 rounded"
              value={editedTitle}
              onChange={handleEditChange}
            />
          </form>
          <div className="items-center">
            <button
              className="px-4 py-2 float-right"
              onClick={() => setIsEditing(false)}
              type="button"
            >
              x
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 float-right"
              type="submit"
            >
              save
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div
            key={id}
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            className={`${
              snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
            } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
          >
            <div>
              <input
                className="mr-2"
                type="checkbox"
                onChange={() => handleCompleteChange(id)}
                defaultChecked={completed}
              />{" "}
              <span className={completed ? "line-through" : undefined}>
                {title}
              </span>
            </div>
            <div className="items-center">
              <button
                className="float-right px-4 py-2"
                onClick={() => handleClick(id)}
              >
                x
              </button>
              <button
                className="float-right px-4 py-2"
                onClick={() => setIsEditing(true)}
              >
                edit
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
);

export default List;
