import { ActionTypes } from "./types";

export function repositoriesRequest(nameUser) {
  return {
    type: ActionTypes.repositoriesRequest,
    payload: {
      nameUser,
    },
  };
}

export function repositoriesSuccess(data) {
  return {
    type: ActionTypes.repositoriesSuccess,
    payload: {
      data,
    },
  };
}

export function repositoriesFailure() {
  return {
    type: ActionTypes.repositoriesFailure,
  };
}
