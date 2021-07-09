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


export function deleteRepositoryRequest(IdRepository) {
  return {
    type: ActionTypes.deleteFavoritesRequest,
    payload: {
      IdRepository,
    },
  };
}

export function  deleteRepositorySuccess(IdRepository) {
  return {
    type: ActionTypes.deleteFavoritesSuccess,
    payload: {
      IdRepository,
    },
  };
}

export function  deleteRepositoryFailure() {
  return {
    type: ActionTypes.deleteFavoritesFailure,
  };
}





