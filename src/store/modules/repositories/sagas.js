import { all, takeLatest, call, put } from "redux-saga/effects";
import { api } from "services/api";
import { ActionTypes } from "./types";

function* repositoriesDataSaga({ payload }) {
  const { name } = payload;

  try {
    const responseData = yield call(api.get, `${name}/repos`);
    yield put(ActionTypes.repositoriesSuccess(responseData));
  } catch (error) {
    yield put(ActionTypes.repositoriesFailure());
  }
}

export default all([
  takeLatest(ActionTypes.repositoriesRequest, repositoriesDataSaga),
]);
