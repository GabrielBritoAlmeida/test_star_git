import { ActionTypes } from "./types";

export function repositoryRequest(repository) {
  return {
    type: ActionTypes.addFavoritesRequest,
    payload: {
      repository,
    },
  };
}

export function repositorySuccess(repository) {
  return {
    type: ActionTypes.addFavoritesSuccess,
    payload: {
      repository,
    },
  };
}

export function repositoryFailure() {
  return {
    type: ActionTypes.addFavoritesFailure,
  };
}
