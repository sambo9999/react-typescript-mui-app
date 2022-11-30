import React from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

//https://recoiljs.org/docs/introduction/core-concepts

export const RecallState = () => {
  //TODO: init state
  const textState = atom({
    key: "textState",
    default: "",
  });

  const [text, setText] = useRecoilState(textState);

  const onChange = (event: any) => {
    setText(event.target.value);
  };

  //TODO: count sate
  const charCountState = selector({
    key: "charCountState",
    get: ({ get }: any) => {
      const text = get(textState);
      return text.length;
    },
  });
  const count = useRecoilValue(charCountState);

  return (
    <div>
      <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
        Echo: {text}
        <p>Character Count: {count}</p>
      </div>
    </div>
  );
};
