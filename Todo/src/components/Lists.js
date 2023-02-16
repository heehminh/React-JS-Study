import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import List from "./List";

export default function Lists({ todoData, setTodoData }) {
  const handleEnd = (result) => {
    // result 매개변수에는 source 항목 및 대상 위치와 같은
    // 드래그 이벤트에 대한 정보가 포함된다.
    console.log(result);

    // 목적지가 없으면 (이벤트 취소) 이 함수를 종료한다.
    if (!result.destination) return;

    const newTodoData = [...todoData];

    // 1. 변경시키는 아이템을 배열에서 지워준다.
    // 2. return 값으로 지워진 아이템을 잡아준다.
    const [reorderItem] = newTodoData.splice(result.source.index, 1);

    // 3. 원하는 자리에 reorderItem을 insert 해준다.
    newTodoData.splice(result.destination.index, 0, reorderItem);
    setTodoData(newTodoData);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <List
                      key={data.id}
                      id={data.id}
                      title={data.title}
                      completed={data.completed}
                      todoData={todoData}
                      setTodoData={setTodoData}
                      provided={provided}
                      snapshot={snapshot}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
