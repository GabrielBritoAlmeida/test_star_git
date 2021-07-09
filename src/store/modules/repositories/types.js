export const ActionTypes = () => {
  const repositoriesRequest = "REPOSITORIES_TO_REQUEST";
  const repositoriesFailure = "REPOSITORIES_TO_FAILURE";
  const repositoriesSuccess = "REPOSITORIES_TO_SUCCESS";

  return {
    repositoriesRequest,
    repositoriesFailure,
    repositoriesSuccess,
  };
};
