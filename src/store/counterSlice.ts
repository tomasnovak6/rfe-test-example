import { createSlice } from '@reduxjs/toolkit';
import { CounterInterface } from './counterInterface';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 1,
    },
    reducers: {
        increment: (state: CounterInterface): void => {
            state.value++
        },
        decrement: (state: CounterInterface): void => {
            state.value--
        },
        reset: (state: CounterInterface): void => {
            state.value = 1;
        },
    },
})

export const { increment, decrement, reset } = counterSlice.actions

export default counterSlice.reducer