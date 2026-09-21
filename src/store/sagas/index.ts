import type { SagaIterator } from 'redux-saga';
import { fork } from 'redux-saga/effects';

import { watchHandleRequest } from './box';

export default function* rootSaga(): SagaIterator {
  yield fork(watchHandleRequest);
}
