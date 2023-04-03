import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});

// function reducer(state, action) {
//   if (action.type === "up") {
//     return { ...state, value: state.value + action.step };
//   }
//   return state;
// }

// const initialState = { value: 0 };
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

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
          dispatch(counterSlice.actions.up(2)); // payload: 2
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
