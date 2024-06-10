import login from "./login.services.js";
import userRepositories from "../repositories/user.repositories.js";

const createServices = async (body) => {

  const {
    nome,
    sobrenome,
    email,
    telefone,
    cpf,
    data_nascimento,
    sexo,
    endereco,
    senha,
    confirm_senha} = body;

  if (
    !nome ||
    !sobrenome ||
    !email ||
    !telefone ||
    !cpf ||
    !data_nascimento ||
    !sexo ||
    !endereco ||
    !senha ||
    !confirm_senha
  )
    throw new Error("Submeta todos os campos do registro");


  const usuarioExistente = await userRepositories.findByEmailRepositories(
    email
  );

  if (usuarioExistente) throw new Error("Usuário existente no bando de Dados");

  if (senha !== confirm_senha) throw new Error("As senhas não coincidem");

  const user = await userRepositories.createRepositories(body);

  if (!user) throw new Error("Erro ao criar usuário");

  const token = login.genarateToken(user.id);
  return {
    user: {
      id: user.id,
      nome,
      sobrenome,
      email,
      cpf,
      data_nascimento,
    },
    token,
  };
};

const findAllSerices = async () => {
  
    const users = await userRepositories.findAllRepositories();

    if (users.length === 0) throw new Error ("Não há usuaários cadastrados!");

    return users;
    
 
};

export default {
  createServices,
  findAllSerices,
};
