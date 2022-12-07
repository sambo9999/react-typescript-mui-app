// import { createSlice } from '@reduxjs/toolkit';



// export const counterSlice = createSlice({
//   name: 'siteSlice',
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     increment: (state) => {
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },

//   },
// })

// export const { increment, decrement } = counterSlice.actions

// export default counterSlice.reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../index'

// Define a type for the slice state
interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',

  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

//@ts-ignore
// export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer