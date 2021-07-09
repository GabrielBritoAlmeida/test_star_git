import { all, takeLatest, call, put } from "redux-saga/effects";
import { api } from "services/api";
import { ActionTypes } from "./types";
import { repositoriesSuccess, repositoriesFailure } from "./action";

function* repositoriesDataSaga({ payload }) {
  const { nameUser } = payload;

  try {
    const responseData = yield call(api.get, `${nameUser}/repos`);
    yield put(repositoriesSuccess(responseData.data));
  } catch (error) {
    yield put(repositoriesFailure());
  }
}

export default all([
  takeLatest(ActionTypes.repositoriesRequest, repositoriesDataSaga),
]);
