import { useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography, Grid } from "@material-ui/core";
import { Container } from "components/Container";
import { BoxRepositories } from "components/BoxRepositories";
import { Main } from "components/Main";

export function Repositories() {
  const history = useHistory();
  const repositories = useSelector((state) => state.repositories.data);
  const favorites = useSelector((state) => state.favorites.repositoryData);

  const reposUser = useMemo(
    () =>
      repositories.map((repo) => {
        const index = favorites.findIndex((item) => item.idRepo === repo.id);

        return (
          <BoxRepositories
            key={repo?.id}
            idRepo={repo?.id}
            nameRepo={repo?.name}
            nameUser={repo?.owner?.login}
            avatarUrlRepo={repo?.owner?.avatar_url}
            isFavorite={index >= 0}
          />
        );
      }),
    [favorites, repositories]
  );

  return (
    <Container>
      <Typography variant="h3" style={{ fontWeight: 700, margin: "40px 0" }}>
        Repositórios no Github.
      </Typography>
      <Typography
        onClick={() => history.push("/favorites")}
        style={{ fontWeight: 700, margin: "40px 0", cursor: "pointer" }}
      >
        Acessar favoritos.
      </Typography>

      <Grid container>
        <Grid item xs={12} sm={11}>
          <Main />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={11}>
          {reposUser}
        </Grid>
      </Grid>
    </Container>
  );
}
