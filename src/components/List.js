import React from 'react'

export default function List({todoData, setTodoData}) {

    const handleClick = (id) => {
        let newToDoData = todoData.filter(data => data.id !== id)
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
        {todoData.map((data) => (
            <div key={data.id}>
                <div className={`flex items-center justify-between w-full px-4
                    py-1 my-2 text-gray-600 bg-gray-100 border rounded`}>
                    <input 
                    type="checkbox" 
                    onChange= {() => handleCompleteChange(data.id)}
                    defaultChecked={false} />
                    <span className={data.completed && "line-through"}>{" "}{data.title}</span>
                    <button className="px-4 py-2 float-right" onClick={() => handleClick(data.id)}>x</button>
                </div>
            </div>
        ))}
    </div>
  )
}
