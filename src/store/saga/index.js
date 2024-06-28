import { all } from "redux-saga/effects";
import { webSaga } from "./web.saga";
import { authSaga } from "./auth.saga";
import { adminSaga } from "./admin.saga";

export default function* rootSaga() {
  yield all([webSaga(), authSaga(), adminSaga()]);
}
