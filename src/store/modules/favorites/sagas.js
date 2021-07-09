import { all, takeLatest, put } from "redux-saga/effects";
import { ActionTypes } from "./types";
import { repositorySuccess, repositoryFailure } from "./action";

function* repositoryDataSaga({ payload }) {
  const { repository } = payload;

  try {
    yield put(repositorySuccess(repository));
  } catch (error) {
    yield put(repositoryFailure());
  }
}

export default all([
  takeLatest(ActionTypes.addFavoritesRequest, repositoryDataSaga),
]);
