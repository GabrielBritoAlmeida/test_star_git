import ImageGitBg from "assets/gitbg.svg";

import { Box, Grid } from "@material-ui/core";

export function Container({ children }) {
  return (
    <Grid container justifyContent="center" >
      <Grid
        item
        xs={12}
        sm={8}
        style={{ border: "1px solid red", height: "100vh", padding: "10px" }}
      >
        <Box
          style={{
            backgroundImage: `url(${ImageGitBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "50%",
            height: "80%",
            position: "absolute",
            right: '10px',
          }}
        />
        {children}
      </Grid>
    </Grid>
  );
}
