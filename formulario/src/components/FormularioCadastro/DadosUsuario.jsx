import React, {useState, useContext} from "react";
import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({aoEnviar}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);

  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form onSubmit={(evento) => {
        evento.preventDefault();
        if (possoEnviar()){
          aoEnviar({email, senha});
        }
    }}>
      <TextField
        type="email"
        id="email"
        name="email"
        label="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={email}
        onChange={(event) => {
            setEmail(event.target.value);
        }}
      />
      <TextField
        type="password"
        id="senha"
        name="senha"
        label="senha"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        value={senha}
        onChange={(event) => {
            setSenha(event.target.value);
        }}
        
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
