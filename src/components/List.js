import React from 'react'

export default function List({todoData, setTodoData}) {

    const btnStyle = {
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right",
    };

    const getStyle = (completed) => {
        return {
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: completed ? "line-through" : "none", // 삼항연산자
        };
    };

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
            <div style={getStyle(data.completed)} key={data.id}>
            <p>
                <input 
                type="checkbox" 
                onChange= {() => handleCompleteChange(data.id)}
                defaultChecked={false} />
                {" "}{data.title}
                <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
            </p>
            </div>
        ))}
    </div>
  )
}
