import { Box, Typography } from "@material-ui/core";

export function BoxRepositories() {
  return (
    <Box
      display="flex"
      alignItems="center"
      p="16px"
      width="100%"
      height="120px"
      border="1px solid red"
      style={{ backgroundColor: "#fff" }}
    >
      <Typography
      // style={{  }}
      >
        Repositórios no Github.
      </Typography>
    </Box>
  );
}
