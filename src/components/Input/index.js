import { Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

export function Input() {
  return (
    <Box style={{backgroundColor: '#fff'}}>
    <TextField
      fullWidth
      id="outlined-basic"
      label="Pesquisar usuário"
      variant="outlined"
    />
    </Box>
  );
}
