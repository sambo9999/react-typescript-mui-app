import React from "react";
import { BaseLayout } from "../../components/layouts/baseLayout";
import { HookCount } from "../../hooks";
import RegisterFrom from "../../reack-hook-from";

function App() {
  return (
    <BaseLayout>
      <h1>Home</h1>
      <RegisterFrom />
      <HookCount />
    </BaseLayout>
  );
}

export default App;
