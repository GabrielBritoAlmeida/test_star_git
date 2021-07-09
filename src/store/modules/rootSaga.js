import { all } from "redux-saga/effects";

import repositories from "./repositories/sagas";
import favorites from "./favorites/sagas";

export default function* rootSaga() {
  yield all([repositories, favorites]);
}
