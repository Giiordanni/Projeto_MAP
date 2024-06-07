import secretario from "../models/Secretario.js";

const createRepositories = ({
  nome,
  sobrenome,
  email,
  telefone,
  cpf,
  data_nascimento,
  sexo,
  endereco,
  senha,
  confirm_senha,
}) =>
  secretario.create({
    nome,
    sobrenome,
    email,
    telefone,
    cpf,
    data_nascimento,
    sexo,
    endereco,
    senha,
    confirm_senha,
  });


  export default {createRepositories}
