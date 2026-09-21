import { combineReducers } from '@reduxjs/toolkit';

import box from './boxSlice';

const rootReducer = combineReducers({
  box
});

export default rootReducer;
