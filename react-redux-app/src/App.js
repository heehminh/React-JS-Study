import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import { asyncUpFetch, up } from "./counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.value;
  });
  const status = useSelector((state) => {
    return state.counter.status;
  });
  return (
    <div>
      <button
        onClick={() => {
          // dispatch({ type: "counterSlice/up", step: 2 });
          dispatch(up(1)); // payload: 1
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(asyncUpFetch());
        }}
      >
        + async fetch
      </button>
      <br />
      {count} | {status}
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
