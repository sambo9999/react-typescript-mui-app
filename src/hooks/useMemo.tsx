import { useMemo, useState } from "react";

export const UseMemoFunction = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const sum = useMemo(() => {
    console.log("Calculating");
    return data.reduce((acc, data) => acc + data, 0);
  }, [check1]);
  console.log(sum);
  return (
    <div style={{ height: "100vh", display: "grid", placeContent: "center" }}>
      <button onClick={() => setCheck1((p) => !p)}>Button1</button>
      <button onClick={() => setCheck2((p) => !p)}>Button2</button>
    </div>
  );
};
