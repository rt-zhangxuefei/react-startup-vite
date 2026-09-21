import { createAction } from '@reduxjs/toolkit';
import type { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';

import { GET_RESULT } from '../constants';
import { setResult } from '../slices/boxSlice';

export const getResult = createAction(GET_RESULT);

function fetchMockResult() {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Hello World');
    }, 1000);
  });
}

function* handleRequest(): SagaIterator {
  try {
    const res: string = yield call(fetchMockResult);
    yield put(setResult(res));
  } catch {
    yield put(setResult(null));
  }
}

export function* watchHandleRequest(): SagaIterator {
  yield takeLatest(getResult.type, handleRequest);
}
