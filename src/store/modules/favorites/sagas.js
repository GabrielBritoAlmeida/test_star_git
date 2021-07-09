import { all, takeLatest, put } from "redux-saga/effects";
import { ActionTypes } from "./types";
import {
  repositorySuccess,
  repositoryFailure,
  deleteRepositorySuccess,
  deleteRepositoryFailure,
} from "./action";

function* repositoryDataSaga({ payload }) {
  const { repository } = payload;

  try {
    yield put(repositorySuccess(repository));
  } catch (error) {
    yield put(repositoryFailure());
  }
}

function* deleteRepositoryDataSaga({ payload }) {
  const { IdRepository } = payload;

  try {
    yield put(deleteRepositorySuccess(IdRepository));
  } catch (error) {
    yield put(deleteRepositoryFailure());
  }
}

export default all([
  takeLatest(ActionTypes.addFavoritesRequest, repositoryDataSaga),
  takeLatest(ActionTypes.deleteFavoritesRequest, deleteRepositoryDataSaga),
]);
