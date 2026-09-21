import { useEffect } from 'react';
import { createSelector } from 'reselect';

import styles from './Box.module.less';
import type { RootState } from '@/store';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getResult } from '@/store/sagas/box';

const selectResult = createSelector(
  (state: RootState) => state.box,
  (box) => box.result
);

const Box = () => {
  const dispatch = useAppDispatch();
  const result = useAppSelector(selectResult);

  useEffect(() => {
    dispatch(getResult());
  }, [dispatch]);

  return <div className={styles.box}>{result || 'loading...'}</div>;
};

export default Box;
