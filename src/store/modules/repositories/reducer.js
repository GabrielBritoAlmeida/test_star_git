import produce from "immer";
import { ActionTypes } from "./types";

const INITIAL_STATE = {
  data: [],
  loading: false,
  failure: false,
};

const Repositories = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.repositoriesRequest: {
        draft.loading = true;
        break;
      }

      case ActionTypes.repositoriesSuccess: {
        const { data } = action.payload;
        draft.data = data;
        draft.loading = false;
        break;
      }

      case ActionTypes.repositoriesFailure: {
        draft.failure = true;
        draft.loading = false;
        break;
      }

      default: {
        draft.loading = false;
        return state;
      }
    }
  });
};

export default Repositories;
