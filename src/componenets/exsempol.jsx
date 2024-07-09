import React, { useState, useCallback } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Oshirish</button>
    </div>
  );
}

export default Counter;
