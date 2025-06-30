import React, { useState } from "react";

interface CounterProps {
  render: (
    count: number,
    increment: () => void,
    decrement: () => void
  ) => React.ReactNode;
}

const Counter: React.FC<CounterProps> = ({ render }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return <>{render(count, increment, decrement)}</>;
};

export default Counter;
