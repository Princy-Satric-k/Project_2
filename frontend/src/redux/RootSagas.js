import { fork } from "redux-saga/effects";
import ShoppingSagas from "./sagas/ShoppingSagas";
export default function* rootSaga() {
  yield fork(ShoppingSagas);
}
