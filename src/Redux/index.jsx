import React from "react";
import { Decrement, Increment } from "./CounterSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Index() {
    const dispatch = useDispatch();
    const count =  useSelector((state) => state.counter.value)
  return (
    <div>
      <button style={{ backgroundColor: "purple" }} onClick={() => dispatch(Increment())}>
        {" "}
        +{" "}
      </button>
      {count}{" "}
      <button style={{ backgroundColor: "blue" }} onClick={() => dispatch(Decrement())}>
        {" "}
        -{" "}
      </button>
    </div>
  );
}
