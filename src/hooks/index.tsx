import React, { useState } from "react";

export const HookCount = () => {
  const [count, setCount] = useState<number>(0);

  const handelClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count{count}</p>
      <button onClick={handelClick}>button</button>
    </div>
  );
};
