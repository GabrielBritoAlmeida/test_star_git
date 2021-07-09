import { IconButton } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";

//Icons
import StarOutlineIcon from "@material-ui/icons/StarOutline";

export function BoxRepositories() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginTop="20px"
        p="16px 32px"
        width="100%"
        height="80px"
        border="1px solid lightgrey"
        borderRadius="5px"
        style={{ backgroundColor: "#fff" }}
      >
        <Typography style={{ fontSize: 24, color: "#333" }}>
          Nome do repositório
        </Typography>

        <IconButton>
          <StarOutlineIcon style={{ fontSize: 48, color: "lightgrey" }} />
        </IconButton>
      </Box>
    </>
  );
}
