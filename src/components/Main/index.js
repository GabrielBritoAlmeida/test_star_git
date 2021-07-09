import { Grid } from "@material-ui/core";
import { Input } from "../Input";
import { ButtonSearch } from "../Button";

export function Main() {
  return (
    <Grid container alignItems="center" spacing={1}>
      <Grid item xs={12} sm={8}>
        <Input />
      </Grid>
      <Grid item xs={12} sm={4}>
        <ButtonSearch />
      </Grid>
    </Grid>
  );
}
