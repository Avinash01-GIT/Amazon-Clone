import { createSlice } from "@reduxjs/toolkit";

const initialState = {
products: [],
userinfo: [],
}

export const amazonSlice = createSlice({
  name:"amazon",
  initialState,
  reducers:{
    addToCart: (state, action) => {
      state.products = action.payLoad
    }
  }
})

export const { addToCart } = amazonSlice.actions;
export default amazonSlice.reducer;