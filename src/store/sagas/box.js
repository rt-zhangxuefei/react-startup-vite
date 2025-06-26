import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

import { GET_RESULT } from '../contants';
import { setResult } from '../slices/boxSlice';

export const getResult = createAction(GET_RESULT);

function* handleRequest() {
  try {
    // 模拟异步接口
    const res = yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello World');
      }, 1000);
    });
    yield put(setResult(res));
  } catch (error) {
    yield put(setResult(null));
  }
}
export function* watchHandleRequest() {
  yield takeLatest(getResult.type, handleRequest);
}
