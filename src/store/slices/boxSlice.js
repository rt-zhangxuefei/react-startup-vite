import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  result: null
};

const boxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {
    setResult(state, action) {
      state.result = action.payload;
    }
  }
});

export const { setResult } = boxSlice.actions;
export default boxSlice.reducer;
