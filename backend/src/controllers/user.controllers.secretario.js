import create_sec from '../services/user.services.js';
import message from "../services/message.services.js";

const create = async (req, res) => {
  try {
    const { nome, sobrenome, email, telefone, cpf, data_nascimento, sexo, endereco, senha, confirm_senha } = req.body;

    if ( !nome || !sobrenome || !email || !telefone || !cpf || !data_nascimento || !sexo || !endereco ||!senha || !confirm_senha) 
      return res.status(400).send({message: "Submeta todos os campos do regustro!"})

    if (senha !== confirm_senha) {
      return res.status(400).send({ message: "As senhas não coincidem" });
    }

    const user = await create_sec.create(req.body);

    if (!user) {
      return res.status(400).send({ message: "Erro ao criar usuário" });
    }

    res.status(201).send({
      message: "Usuário criado com sucesso",
      user: {
        id: user_id,
        nome,
        sobrenome,
        email,
        cpf
      }
    })
  } catch (err) {
    res.status(500).send({message: err.message});
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



export default {
  create,
  findAll
};
