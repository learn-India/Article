import combinedSagaSagas from './store/saga';
import { all } from 'redux-saga/effects';

// Root Saga - Generator Function
export default function* rootSaga() {
  yield all([
    ...combinedSagaSagas,
  ]);
}