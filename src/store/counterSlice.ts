import { createSlice } from '@reduxjs/toolkit';
import {CounterInterface, CounterPayload} from "./counterInterface";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state: CounterInterface): void => {
            state.value++
        },
        decrement: (state: CounterInterface): void => {
            state.value--
        },
        reset: (state: CounterInterface): void => {
            state.value = 0;
        },
        incrementByAmount: (state: CounterInterface, action: CounterPayload): void => {
            state.value += action.payload
        },
    },
})

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer