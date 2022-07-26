import { createSlice } from '@reduxjs/toolkit'
export const productSlice = createSlice({
  name: 'product',
  initialState:{
    value:0,
    type:"no thing",
  },
  reducers: {
    add: (state) => {
      state.value += 1
    },
    del: (state) => {
      state.value -= 1
    },
 
  },
})

export const { add, del } = productSlice.actions

export default productSlice.reducer