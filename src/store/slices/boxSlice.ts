import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface BoxState {
  result: string | null;
}

const initialState: BoxState = {
  result: null
};

const boxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {
    setResult(state, action: PayloadAction<string | null>) {
      state.result = action.payload;
    }
  }
});

export const { setResult } = boxSlice.actions;
export default boxSlice.reducer;
