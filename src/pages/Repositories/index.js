import { Typography, Grid } from "@material-ui/core";
import { Container } from "components/Container";
import { BoxRepositories } from "components/BoxRepositories";
import { Main } from "components/Main";

export function Repositories() {
  return (
    <Container>
      <Typography variant="h3" style={{ fontWeight: 700, margin: "40px 0" }}>
        Repositórios no Github.
      </Typography>

      <Grid container>
        <Grid item xs={12} sm={11}>
          <Main />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={11}>
          <BoxRepositories />
        </Grid>
      </Grid>
    </Container>
  );
}
