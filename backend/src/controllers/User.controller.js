import create_sec from '../services/secretario.services.js';
import message from "../services/message.services.js";

const create = async (req, res) => {
  try {
    const { nome, sobrenome, email, telefone, cpf, data_nascimento, sexo, endereco, senha, confirm_senha } = req.body;

    if ( !nome || !sobrenome || !email || !telefone || !cpf || !data_nascimento || !sexo || !endereco ||!senha || !confirm_senha) {
      console.log( nome, sobrenome, email, telefone, cpf, data_nascimento, sexo, endereco, senha, confirm_senha );
      return res
        .status(400)
        .send({ message: "Todos os campos precisam estar preenchidos" });
    }

    if (senha !== confirm_senha) {
      return res.status(400).send({ message: "As senhas não coincidem" });
    }

    const user = await create_sec.create_sec(req.body);

    if (!user) {
      return res.status(400).send({ message: "Erro ao cruar usuário" });
    }

    req.status(201).send({
      message: "Usuário criado com sucesso",
      user: {
        id: user_id,
        nome,
        email
      }
    });
  } catch (error) {
    console.error("Erro aos criar Usuário: ", error);
    res
      .status(500)
      .send({ message: "Ocorreu uum erro ao processar solicitação" });
  }
};

const findById = async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAll = async (req, res) => {
    try{ 
        const users = await create_sec.findAllServices();
        if (users.length === 0) {
            return res.status(400).send({ message: "Não há usuaários cadastrados!" });
        }
        res.send(users)
    } catch(err){
        res.status(500).send({message: err.message});
    }
    };

const update = async (req, res) => {
  try {
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
    } = req.body;

    if (
      !nome &&
      !sobrenome &&
      !email &&
      !telefone &&
      !cpf &&
      !data_nascimento &&
      !sexo &&
      !endereco &&
      !senha
    ) {
      response
        .status(400)
        .send({ message: "Submeta pelo menos um campo para fazer o uupdate!" });
    }

    const { id, user } = req;
    await create_sec.updateservice(
      id,
      nome,
      sobrenome,
      email,
      telefone,
      cpf,
      data_nascimento,
      sexo,
      endereco,
      senha
    );
  } catch (err) {
    res.status(400).send({ message: message.err });
  }
};

export default {
  create,
  update,
  findById,
  findAll
};
