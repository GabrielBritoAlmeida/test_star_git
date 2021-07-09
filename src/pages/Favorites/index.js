import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Typography, Grid } from "@material-ui/core";
import { Container } from "components/Container";
import { BoxRepositoriesFavorites } from "components/BoxRepositoriesFavorites";
import { useHistory } from "react-router-dom";

export function Favorites() {
  const history = useHistory();
  const favorites = useSelector((state) => state.favorites.repositoryData);

  const reposUser = useMemo(
    () =>
      favorites.map((repo) => {

        return (
          <BoxRepositoriesFavorites
            key={repo?.idRepo}
            idRepo={repo?.idRepo}
            nameRepo={repo?.nameRepo}
            nameUser={repo?.nameUser}
            avatarUrlRepo={repo?.avatarUrlRepo}
            isFavorite={true}
          />
        );
      }),
    [favorites]
  );

  return (
    <Container>
      <Typography variant="h3" style={{ fontWeight: 700, margin: "40px 0" }}>
        Lista de Favoritos.
      </Typography>
      <Typography
        onClick={() => history.push("/")}
        style={{ fontWeight: 700, margin: "40px 0", cursor: "pointer" }}
      >
        {"< Voltar"}
      </Typography>

      {favorites?.length > 0 ? (
        <Grid container>
          <Grid item xs={12} sm={11}>
            {reposUser}
          </Grid>
        </Grid>
      ) : (
        <Grid item xs={12} sm={11}>
          <Typography
            variant="h3"
            style={{ fontWeight: 700, margin: "40px 0" }}
          >
            Lista vazia.
          </Typography>
        </Grid>
      )}
    </Container>
  );
}
