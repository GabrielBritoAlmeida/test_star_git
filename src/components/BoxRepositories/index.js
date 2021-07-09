import { Box, Typography } from "@material-ui/core";

//Icons
import StarOutlineIcon from "@material-ui/icons/StarOutline";

export function BoxRepositories() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        marginTop='20px'
        p="16px"
        width="100%"
        height="120px"
        border="1px solid lightgrey"
        borderRadius="5px"
        title="Favorita repositório"
        style={{ backgroundColor: "#fff", cursor: "pointer" }}
      >
        <StarOutlineIcon
          style={{ fontSize: 48, marginRight: 20, color: "lightgrey" }}
        />
        <Typography style={{ fontSize: 24, color: "#333" }}>
          Nome do repositório
        </Typography>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        p="16px"
        marginTop='20px'
        width="100%"
        height="120px"
        border="1px solid lightgrey"
        borderRadius="5px"
        title="Adicionar ao favoritos"
        style={{ backgroundColor: "#fff", cursor: "pointer" }}
      >
        <StarOutlineIcon
          style={{ fontSize: 48, marginRight: 20, color: "lightgrey" }}
        />
        <Typography style={{ fontSize: 24, color: "#333" }}>
          Nome do repositório
        </Typography>
      </Box>
    </>
  );
}
