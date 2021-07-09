import { ActionTypes } from "./types";

export function repositoriesRequest() {
  return {
    type: ActionTypes.repositoriesRequest,
  };
}

export function repositoriesSuccess(repositories) {
  return {
    type: ActionTypes.repositoriesSuccess,
    payload: {
      repositories,
    },
  };
}

export function repositoriesFailure() {
  return {
    type: ActionTypes.repositoriesFailure,
  };
}
