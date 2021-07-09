import TextField from "@material-ui/core/TextField";

export function Input() {
  return (
    <TextField
      fullWidth
      id="outlined-basic"
      label="Digite o nome do usuário"
      variant="outlined"
    />
  );
}
