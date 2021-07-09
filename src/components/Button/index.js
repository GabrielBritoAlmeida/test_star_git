import { ColorButton } from "./styles";

export function ButtonSearch({ ...props }) {
  return (
    <div>
      <ColorButton fullWidth variant="contained" color="primary" {...props}>
        Pesquisar
      </ColorButton>
    </div>
  );
}
