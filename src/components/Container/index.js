import ImageGitBg from "assets/gitbg.svg";

import { Box } from "@material-ui/core";

export function Container({ children }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box
        display="flex"
        flexDirection="column"
        border="1px solid red"
        padding=" 0 24px 24px"
        width="100%"
        maxWidth="1000px"
        height="100vh"
        position="relative"
      >
        <Box
          style={{
            backgroundImage: `url(${ImageGitBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "80%",
            height: "80%",
            position: "absolute",
            right: '-20%',
          }}
        />
        {children}
      </Box>
    </Box>
  );
}
