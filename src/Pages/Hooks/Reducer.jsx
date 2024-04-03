import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div>
      {state.count}
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        click here
      </button>
    </div>
  );
};

export default Reducer;
