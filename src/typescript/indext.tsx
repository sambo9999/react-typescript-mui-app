import React from "react";

interface FormProps {
  value: T;
  children: (value: T) => JSX.Element;
}

const Form = <T extends {}>({ children, value }: FormProps) => {
  return <div>{children(value)}</div>;
};
export const TypescriptLanguage: React.FC = () => {
  return (
    <div>
      <Form value={{ name: "sambo Suong" }}>
        {(value) => <>{value.name}</>}
      </Form>
    </div>
  );
};
