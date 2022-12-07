import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { counterSlice } from "./features/site/siteSlice";
// import { counterSlice } from "./features/site/siteSlice";

const store = configureStore({
  reducer: {
    //@ts-ignore
    counter: counterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
