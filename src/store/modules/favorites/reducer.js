import produce from "immer";
import { ActionTypes } from "./types";

const INITIAL_STATE = {
  repositoryData: [],
  loading: false,
  failure: false,
};

const Repositories = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addFavoritesRequest: {
        draft.loading = true;
        break;
      }

      case ActionTypes.addFavoritesSuccess: {
        const { repository } = action.payload;
        draft.repositoryData.push(repository);
        draft.loading = false;
        break;
      }

      case ActionTypes.addFavoritesFailure: {
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
