function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return {
      valido: false,
      texto: "Cpf deve ter 11 dígitos",
    };
  } else {
    return {
      valido: true,
      texto: "",
    };
  }
}

function validarSenha(senha) {
  if (senha.length < 6 || senha.length > 10) {
    return {
      valido: false,
      texto: "Senha deve conter entre 6 e 10 dígitos",
    };
  } else {
    return {
      valido: true,
      texto: "",
    };
  }
}

export { validarCPF, validarSenha };
