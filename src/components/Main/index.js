import { useDispatch } from "react-redux";
import { repositoriesRequest } from "store/modules/repositories/action";

import { Grid } from "@material-ui/core";
import { Input } from "../Input";
import { ButtonSearch } from "../Button";
import { useState } from "react";

export function Main() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  function handleSearchUser() {
    dispatch(repositoriesRequest(inputValue));
  }

  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item xs={12} sm={8}>
        <Input onInput={setInputValue} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <ButtonSearch onClick={handleSearchUser} />
      </Grid>
    </Grid>
  );
}
