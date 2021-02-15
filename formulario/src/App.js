import { Fragment } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h4" align="center" component="h1">Formulário de Cadastro</Typography>
      <FormularioCadastro validarCPF={validarCPF} aoEnviar={aoEnviarForm}/>
    </Container>
  );
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return{
      valido:false,
      texto:"Cpf deve ter 11 digítos"
    }
  }else{
    return{
      valido:true,
      texto:""
    }
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}

export default App;
