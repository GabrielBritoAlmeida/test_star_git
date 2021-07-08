import { Typography } from "@material-ui/core";
import { Container } from "components/Container";

export function Repositories() {
  return (
    <Container>
      <Typography variant="h3" style={{ fontWeight: 700, margin: "40px 0" }}>
        Repositórios no Github.
      </Typography>
    </Container>
  );
}
