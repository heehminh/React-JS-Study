import React from "react";

const List = React.memo(
  ({ id, title, completed, todoData, setTodoData, provided, snapshot }) => {
    const handleClick = (id) => {
      let newToDoData = todoData.filter((data) => data.id !== id);
      setTodoData(newToDoData);
    };

    const handleCompleteChange = (id) => {
      let newToDoData = todoData.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      });
      setTodoData(newToDoData);
    };

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
          <input
            type="checkbox"
            onChange={() => handleCompleteChange(id)}
            defaultChecked={false}
          />
          <span className={completed && "line-through"}> {title}</span>
          <button
            className="px-4 py-2 float-right"
            onClick={() => handleClick(id)}
          >
            x
          </button>
        </div>
      </div>
    );
  }
);

export default List;
