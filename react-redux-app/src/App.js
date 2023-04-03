import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import { up } from "./counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.value;
  });
  return (
    <div>
      <button
        onClick={() => {
          // dispatch({ type: "counterSlice/up", step: 2 });
          dispatch(up(2)); // payload: 2
        }}
      >
        +
      </button>
      {count}
    </div>
  );
}

function App() {
  return (
    <div>
      <Provider store={store}>
        <div>
          <Counter></Counter>
        </div>
      </Provider>
    </div>
  );
}

export default App;
