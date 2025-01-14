import useCounter from "../customHooks/use-counter";

const PracticeComponent = () => {
  const [count, increment, decrement, reset] = useCounter(0, 1);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
};

export default PracticeComponent;
