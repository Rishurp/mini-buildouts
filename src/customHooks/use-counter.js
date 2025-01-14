import { useState } from "react";

const useCounter = (initialCounter, step) => {
  const [count, setCounter] = useState(initialCounter);

  const increment = () => {
    setCounter(count + step);
  };
  const decrement = () => {
    if (count === 0) {
      return;
    }
    setCounter(count - step);
  };

  const reset = () => {
    setCounter(initialCounter);
  };

  return [count, increment, decrement, reset];
};

export default useCounter;
