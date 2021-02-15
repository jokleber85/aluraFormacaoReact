import React, {useState} from "react";
import { TextField, Button, FormControlLabel, Switch } from "@material-ui/core";

function FormularioCadastro({validarCPF, aoEnviar}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [novidades, setNovidades] = useState(true);
  const [promocoes, setPromocoes] = useState(true);

  const [erros, setErros] = useState({cpf:{valido:true, texto:""}});

  return (
    <form onSubmit={(evento) => {
        evento.preventDefault();
        aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
    }}>
      <TextField
        type="text"
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
        value={nome}
        onChange={(event) => {
/*          let tmpNome = event.target.value; 
            if (tmpNome.length >= 3){
                tmpNome = tmpNome.substring(0, 3);
            }
            setNome(tmpNome); */
            setNome(event.target.value);
        }}
      />

      <TextField
        type="text"
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
        value={sobrenome}
        onChange={(event) => {
            setSobrenome(event.target.value);
        }}
      />

      <TextField
        type="text"
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth 
        helperText={erros.cpf.texto}
        error={!erros.cpf.valido}
        onBlur={(event) => {
            const ehValido = validarCPF(cpf)
            setErros({cpf:ehValido})
        }}
        value={cpf}
        onChange={(event) => {
            setCpf(event.target.value);
        }}
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch 
            name="promocoes" 
            color="primary" 
            checked={promocoes}
            onChange={(event) => {
                setPromocoes(event.target.checked);
            }} 
        />}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch 
            name="novidades" 
            color="primary" 
            checked={novidades}
            onChange={(event) => {
                setNovidades(event.target.checked);
            }}  
        />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
