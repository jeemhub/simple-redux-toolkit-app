import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    value:0,
    num:'',
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    add:(state , actions)=>{
        state.value += +actions.payload
    }
 
  },
})

export const { increment, decrement ,add} = counterSlice.actions

export default counterSlice.reducer