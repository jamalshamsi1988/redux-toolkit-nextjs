import { createSlice } from "@reduxjs/toolkit";

const initialState={
    counter : 0
};

const counterSlice = createSlice({
    name :"counter",
    initialState,
    reducers : {
        increment:(state)=>{
            state.counter ++;
        },
        decrement:(state)=>{
            state.counter --;
        },
        incrementByAmount :(state,action)=>{
            state.counter += action.payload;
        }
    }
})

export default counterSlice.reducer;

export const {increment,decrement,incrementByAmount}=counterSlice.actions;
export const selectCounter=(store)=> store.counter.counter;