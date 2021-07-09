import { useState } from "react";
import { Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

export function Input({onInput= () =>{}}) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    !!onInput && onInput(event.target.value);
  };

  return (
    <Box style={{ backgroundColor: "#fff" }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Pesquisar usuário"
        variant="outlined"
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
}
