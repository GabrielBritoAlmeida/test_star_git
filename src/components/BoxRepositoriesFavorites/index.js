import { useDispatch } from "react-redux";
import { IconButton } from "@material-ui/core";
import { Box, Typography, Avatar } from "@material-ui/core";

import { deleteRepositoryRequest } from "store/modules/favorites/action";

//Icons
import StarOutlineIcon from "@material-ui/icons/StarOutline";

export function BoxRepositoriesFavorites({
  idRepo,
  nameRepo,
  nameUser,
  avatarUrlRepo,
}) {
  const dispatch = useDispatch();

  function handleFavoriteUnStar() {
    dispatch(deleteRepositoryRequest(idRepo));
  }

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
        <Box display="flex" alignItems="center">
          <Avatar alt={`avatar ${nameUser}`} src={avatarUrlRepo} />

          <Box display="flex" flexDirection="column">
            <Typography style={{ fontSize: 24, color: "#333", marginLeft: 24 }}>
              {nameRepo}
            </Typography>

            <Typography
              title={nameUser}
              style={{ fontSize: 10, color: "#888", marginLeft: 24 }}
            >
              {nameUser}
            </Typography>
          </Box>
        </Box>

        <IconButton onClick={handleFavoriteUnStar} title="Remover de favoritos">
          <StarOutlineIcon
            style={{
              fontSize: 48,
              color: "yellow",
            }}
          />
        </IconButton>
      </Box>
    </>
  );
}
