import loginService from "../services/login.services.js";
import bcrypt from 'bcrypt';


const login = async (req, res, next) => {
    try{
        const{email, senha, confirm_senha} = req.body;
        const secretario = await loginService.loginService(email);

        if(!secretario){
            return res.status(404).send("Usuário não encontrado!");
        }

        if(!secretario.senha){
            return res.status(400).send({message: "Senha do usuário não está defiinida!"});
        }

        const senhaIsValid = bcrypt.compareSync(senha, secretario.senha);

        if(!senhaIsValid){
            return res.status(400).send({message: "Senha ou usuário inválidos!"})
        }

        const token = loginService.genarateToken(secretario.id)
        res.send({token});
    }catch(error){
        console.error("Erro durante o login:", error);
        res.status(500).send("Ocorreu um erro ao processar sua solicitação. Por favor, tente novsmente mais tarde.")
    }
};

export default { login };