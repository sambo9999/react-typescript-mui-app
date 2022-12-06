import React from "react";

export const HocFunction = () => {
  const multiply = (multiplier: number) => (multiplicand: number) =>
    multiplicand * multiplier;

  const HocFunction = (num: number, num1: number) => num * num1;

  const HocFunctionMulti = (num: number, num1: number) => num * num1;
  const HocFunctionSub = (num: number) => (num1: number) => num - num1;

  const handleMoreFunction = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    HocFunctionMulti(3, 4), HocFunctionSub(2);
  };

  return (
    <div>
      <h1>HocFunction</h1>
      {multiply(2)(10)}
      {HocFunction(4, 10)}
      <br />
    </div>
  );
};
