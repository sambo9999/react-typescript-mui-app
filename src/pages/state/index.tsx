import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { BaseLayout } from "../../components/layouts/baseLayout";
import { useCountStore } from "../../store";
import { useCountReducerStore } from "../../store/feature";
import { useStore } from "../../store/feature/useStore";

//https://docs.pmnd.rs/zustand/getting-started/comparison

export const StatePage = () => {
  // style  one
  const bears = useStore((state: any) => state.bears);
  const increasePopulation = useStore((state: any) => state.increasePopulation);
  const decreasePopulation = useStore((state: any) => state.decreasePopulation);
  const removeAllBears = useStore((state: any) => state.removeAllBears);
  //style two
  // const count = useCountStore((state: any) => state.count);
  const increment = useCountStore((state: any) => state.increment);
  const decrement = useCountStore((state: any) => state.decrement);

  // reduce
  // const { dispatch, count } = useCountReducerStore((state: any) => state);
  return (
    <>
      <BaseLayout>
        {/* style one */}
        <Typography variant="h4" component="h2">
          {bears} around here ...
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="success"
            onClick={increasePopulation}
          >
            One Up
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              decreasePopulation();
              if (bears == 0) {
                return alert("number less than one");
              }
            }}
          >
            Down One
          </Button>
          <Button variant="outlined" color="error" onClick={removeAllBears}>
            Reset
          </Button>
        </Stack>

        {/* style tow */}
        {/* <h1>{count}</h1>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button> */}
      </BaseLayout>
    </>
  );
};
